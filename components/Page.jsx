/* eslint-disable indent */
import Symbol from 'components/Symbol'
import SYMBOLS from 'components/enums/SYMBOLS'
import { useEffect } from 'react'

const Page = {}

const SymbolSelector = ({ setSelectedSymbol }) => {
	return (
		<section className="mt-12 w-96 md:w-[28rem]">
			<div className="relative flex flex-col">
				<img
					src="bg-triangle.svg"
					alt="traingle"
					className="absolute left-[5.3rem] top-16 w-3/5 select-none md:left-16 md:w-auto"
				/>
				<div className="flex justify-around md:justify-between">
					<Symbol.Paper
						onClick={() => {
							setSelectedSymbol('Paper')
						}}
					/>
					<Symbol.Scissor
						onClick={() => {
							setSelectedSymbol('Scissor')
						}}
					/>
				</div>
				<Symbol.Rock
					onClick={() => {
						setSelectedSymbol('Rock')
					}}
				/>
			</div>
		</section>
	)
}

const SymbolCard = ({ title, symbol, winner, gameDraw }) => (
	<div className="flex h-52 flex-col items-center justify-between transition-all md:h-80">
		<h6 className="text-md order-3 font-barlow tracking-wider text-white md:order-none md:text-2xl">
			{title}
		</h6>
		{symbol === SYMBOLS.PAPER && (
			<Symbol.Paper size="large" winner={winner} gameDraw={gameDraw} />
		)}
		{symbol === SYMBOLS.SCISSOR && (
			<Symbol.Scissor size="large" winner={winner} gameDraw={gameDraw} />
		)}
		{symbol === SYMBOLS.ROCK && (
			<Symbol.Rock size="large" winner={winner} gameDraw={gameDraw} />
		)}
	</div>
)

const MatchStatus = ({ matchStat, resetGamePlay }) => (
	<div className="order-3 mx-auto mt-8 flex-col items-center justify-center transition-all md:static md:order-none md:flex">
		<h3 className="white font-barlow text-5xl font-extrabold text-white md:text-[4rem]">
			{matchStat}
		</h3>
		<div
			onClick={resetGamePlay}
			className="mt-4  w-full scale-100 cursor-pointer rounded-md border-2 border-white bg-white px-8 py-2 text-center text-xs font-semibold  text-[hsl(349,_70%,_56%)] hover:border-0 hover:bg-[hsl(349,_70%,_56%)] hover:text-white"
		>
			PLAY AGAIN
		</div>
	</div>
)

const GameplayConfig = {
	'container-small': 'w-[30%]',
	'container-large': 'md:w-[65%]'
}

const GamePlay = (props) => {
	const {
		selectedSymbol,
		houseSymbol,
		matchStat,
		resetGamePlay,
		getMatchStatus,
		gameWon,
		gameDraw
	} = props

	useEffect(() => {
		if (selectedSymbol && houseSymbol) getMatchStatus()
	}, [selectedSymbol, houseSymbol])

	return (
		<section
			className={`mt-12 w-11/12 md:mt-16 ${GameplayConfig['container-large']} transition-all`}
		>
			<div className="flex w-full flex-wrap items-center justify-between transition-all md:flex-nowrap">
				<SymbolCard
					title="YOU PICKED"
					symbol={selectedSymbol}
					winner={gameWon}
					gameDraw={gameDraw}
				/>
				<MatchStatus
					matchStat={matchStat}
					resetGamePlay={resetGamePlay}
				/>
				<SymbolCard
					title="THE HOUSE PICKED"
					symbol={houseSymbol}
					winner={!gameWon}
					gameDraw={gameDraw}
				/>
			</div>
		</section>
	)
}

Page.SymbolSelector = SymbolSelector
Page.GamePlay = GamePlay

export default Page
