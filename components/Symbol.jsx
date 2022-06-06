const SymbolConfig = {
	normal: 'md:h-44 md:w-44',
	large: 'md:h-48 md:w-48',
	winner: 'mix-blend-lighten shadow-[0px_0px_0px_50px_hsl(214deg_47%_23%_/_50%),_0px_0px_0px_100px_hsl(214deg_47%_23%_/_50%),_0px_0px_0px_150px_hsl(214deg_47%_23%_/_50%)]'
}

const Symbol = {}

const Paper = ({ size = 'normal', winner = false, onClick }) => (
	<div
		onClick={() => {
			onClick && onClick()
		}}
		title="paper"
		className={`z-10 flex h-36 w-36 ${SymbolConfig[size]} ${
			winner && SymbolConfig.winner
		} cursor-pointer items-center justify-center rounded-full 
         border-[1.2rem] 
         border-paper-outline bg-white shadow-[inset_0px_8px_0px_0px_#b8bdd3,_0px_8px_0px_0px_hsl(230deg_89%_62%)] hover:scale-110`}
	>
		<img src="icon-paper.svg" alt="paper" className="select-none" />
	</div>
)

const Rock = ({ size = 'normal', winner = false, onClick }) => (
	<div
		onClick={() => {
			onClick && onClick()
		}}
		title="rock"
		className={`z-10 mt-8 flex h-36 w-36 ${SymbolConfig[size]} ${
			winner && SymbolConfig.winner
		} cursor-pointer items-center justify-center 
               self-center rounded-full border-[1.2rem] 
             border-rock-outline bg-white shadow-[inset_0px_8px_0px_0px_#b8bdd3,_0px_8px_0px_0px_hsl(349,_71%,_52%)] hover:scale-110`}
	>
		<img src="icon-rock.svg" alt="rock" className="select-none" />
	</div>
)

const Scissor = ({ size = 'normal', winner = false, onClick }) => (
	<div
		onClick={() => {
			onClick && onClick()
		}}
		title="scissors"
		className={`z-10  flex h-36 w-36 ${SymbolConfig[size]} ${
			winner && SymbolConfig.winner
		} cursor-pointer items-center justify-center rounded-full 
             border-[1.2rem] 
             border-scissor-outline bg-white shadow-[inset_0px_8px_0px_0px_#b8bdd3,_0px_8px_0px_0px_hsl(39,_89%,_49%)] hover:scale-110`}
	>
		<img src="icon-scissors.svg" alt="scissors" className="select-none" />
	</div>
)

Symbol.Paper = Paper
Symbol.Rock = Rock
Symbol.Scissor = Scissor

export default Symbol
