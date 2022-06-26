import { useState } from 'react'
import ScoreBoard from 'components/ScoreBoard'
import RulesModal from 'components/RulesModal'
import RulesSection from 'components/RulesSection'
import DocumentHead from 'components/DocumentHead'
import PageContainer from 'components/PageContainer'
import Page from 'components/Page'
import SYMBOLS from 'components/enums/SYMBOLS'

export default function Home() {
	const generateHouseSymbol = () => {
		const randomNo = Math.ceil(Math.random() * 3)
		return randomNo === 1
			? SYMBOLS.PAPER
			: randomNo === 2
			? SYMBOLS.SCISSOR
			: SYMBOLS.ROCK
	}

	// Game states
	const [rulesModalVisible, setRulesModalVisible] = useState(false)
	const [selectedSymbol, setSelectedSymbol] = useState(null)
	const [houseSymbol, setHouseSymbol] = useState(generateHouseSymbol)
	const [matchScore, setMatchScore] = useState(0)
	const [matchStat, setMatchStat] = useState(null)
	const [gameWon, setGameWon] = useState(false)
	const [gameDraw, setGameDraw] = useState(false)
	const [showMatchStatus, setShowMatchStatus] = useState(false)
	const [showHousePicked, setShowHousePicked] = useState(false)

	const resetGamePlay = () => {
		setSelectedSymbol(null)
		setHouseSymbol(generateHouseSymbol())
		setMatchStat(null)
		setGameWon(false)
		setGameDraw(false)
	}

	const getMatchStatus = () => {
		setShowMatchStatus(false)
		setShowHousePicked(false)
		if (selectedSymbol === houseSymbol) {
			setTimeout(() => {
				setGameDraw(true)
				setMatchStat('MATCH DRAW')
			}, 2000)
		} else if (
			(selectedSymbol === SYMBOLS.PAPER &&
				houseSymbol === SYMBOLS.ROCK) ||
			(selectedSymbol === SYMBOLS.ROCK &&
				houseSymbol === SYMBOLS.SCISSOR) ||
			(selectedSymbol === SYMBOLS.SCISSOR &&
				houseSymbol === SYMBOLS.PAPER)
		) {
			setTimeout(() => {
				setMatchScore(matchScore + 1)
				setGameWon(true)
				setGameDraw(false)
				setMatchStat('YOU WON')
			}, 2000)
		} else {
			setTimeout(() => {
				setMatchScore(matchScore < 1 ? matchScore : matchScore - 1)
				setGameWon(false)
				setGameDraw(false)
				setMatchStat('YOU LOSE')
			}, 2000)
		}
		setTimeout(() => {
			setShowHousePicked(true)
			setShowMatchStatus(true)
		}, 2000)
	}

	const closeModal = () => {
		setRulesModalVisible(false)
	}

	return (
		<>
			<DocumentHead />
			<PageContainer>
				<ScoreBoard matchScore={matchScore} />
				{!selectedSymbol && (
					<Page.SymbolSelector
						setSelectedSymbol={setSelectedSymbol}
					/>
				)}
				{selectedSymbol && (
					<Page.GamePlay
						selectedSymbol={selectedSymbol}
						houseSymbol={houseSymbol}
						matchStat={matchStat}
						resetGamePlay={resetGamePlay}
						getMatchStatus={getMatchStatus}
						gameWon={gameWon}
						gameDraw={gameDraw}
						showMatchStatus={showMatchStatus}
						showHousePicked={showHousePicked}
					/>
				)}
				<RulesSection setModalVisible={setRulesModalVisible} />
				{rulesModalVisible && (
					<RulesModal
						visible={rulesModalVisible}
						closeModal={closeModal}
					/>
				)}
			</PageContainer>
		</>
	)
}
