const SymbolConfig = {
	normal: 'md:h-44 md:w-44 border-[1.2rem]',
	large: 'md:h-60 md:w-60 border-[1.2rem] md:border-[2rem]',
	winner_paper:
		'mix-blend-lighten scale-110 shadow-paper-win-mobile md:shadow-paper-win-desktop',
	winner_rock:
		'mix-blend-lighten scale-110 shadow-rock-win-mobile md:shadow-rock-win-desktop',
	winner_scissor:
		'mix-blend-lighten scale-110 shadow-scissor-win-mobile md:shadow-scissor-win-desktop'
}

const Symbol = {}

const Paper = ({ size = 'normal', winner = false, gameDraw, onClick }) => (
	<div
		onClick={() => {
			onClick && onClick()
		}}
		title="paper"
		className={`animate__animated animate__fadeIn z-10 flex h-36 w-36 ${
			SymbolConfig[size]
		} ${
			winner && !gameDraw && SymbolConfig.winner_paper
		} cursor-pointer items-center justify-center rounded-full 
          
         border-paper-outline bg-white ${
				!winner && 'shadow-paper-inner-arc hover:scale-110'
			}`}
	>
		<img src="icon-paper.svg" alt="paper" className="w-2/5 select-none" />
	</div>
)

const Rock = ({ size = 'normal', winner = false, gameDraw, onClick }) => (
	<div
		onClick={() => {
			onClick && onClick()
		}}
		title="rock"
		className={`animate__animated animate__fadeIn z-10 flex h-36 w-36 ${
			SymbolConfig[size]
		} ${
			winner && !gameDraw && SymbolConfig.winner_rock
		} cursor-pointer items-center justify-center 
               self-center rounded-full
             border-rock-outline bg-white ${
					!winner && 'shadow-rock-inner-arc hover:scale-110'
				}`}
	>
		<img src="icon-rock.svg" alt="rock" className="w-2/5 select-none" />
	</div>
)

const Scissor = ({ size = 'normal', winner = false, gameDraw, onClick }) => (
	<div
		onClick={() => {
			onClick && onClick()
		}}
		title="scissors"
		className={`animate__animated animate__fadeIn z-10  flex h-36 w-36 ${
			SymbolConfig[size]
		} ${
			winner && !gameDraw && SymbolConfig.winner_scissor
		} cursor-pointer items-center justify-center rounded-full
             border-scissor-outline bg-white ${
					!winner && 'shadow-scissor-inner-arc hover:scale-110'
				}`}
	>
		<img
			src="icon-scissors.svg"
			alt="scissors"
			className="w-2/5 select-none"
		/>
	</div>
)

Symbol.Paper = Paper
Symbol.Rock = Rock
Symbol.Scissor = Scissor

export default Symbol
