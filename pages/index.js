import { useState, useCallback } from 'react'
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

	const resetGamePlay = useCallback(() => {
		setSelectedSymbol(null)
		setHouseSymbol(generateHouseSymbol())
	}, [setSelectedSymbol, setHouseSymbol])

	const getMatchStatus = useCallback(() => {
		if (selectedSymbol === houseSymbol) {
			setMatchStat('MATCH DRAW')
		} else if (
			(selectedSymbol === SYMBOLS.PAPER &&
				houseSymbol === SYMBOLS.ROCK) ||
			(selectedSymbol === SYMBOLS.ROCK &&
				houseSymbol === SYMBOLS.SCISSOR) ||
			(selectedSymbol === SYMBOLS.SCISSOR &&
				houseSymbol === SYMBOLS.PAPER)
		) {
			setMatchScore((prevScore) => prevScore + 1)
			setMatchStat('YOU WON')
		} else {
			setMatchScore((prevScore) =>
				prevScore < 1 ? prevScore : prevScore - 1
			)
			setMatchStat('YOU LOSE')
		}
	}, [selectedSymbol, houseSymbol, setMatchScore, setMatchStat])

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
					/>
				)}
				<RulesSection setModalVisible={setRulesModalVisible} />
				<RulesModal
					visible={rulesModalVisible}
					setVisible={setRulesModalVisible}
				/>
			</PageContainer>
		</>
	)
}
