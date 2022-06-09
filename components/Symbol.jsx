const SymbolConfig = {
	normal: 'md:h-44 md:w-44 border-[1.2rem]',
	large: 'md:h-60 md:w-60 border-[1.2rem] md:border-[2rem]',
	winner_paper:
		'mix-blend-lighten shadow-[inset_0px_8px_0px_0px_#b8bdd3,_0px_8px_0px_0px_hsl(230deg_89%_62%),_0px_0px_0px_50px_hsl(214deg_47%_23%_/_50%),_0px_0px_0px_75px_hsl(214deg_47%_23%_/_50%),_0px_0px_0px_75px_hsl(214deg_47%_23%_/_50%)] md:shadow-[inset_0px_8px_0px_0px_#b8bdd3,_0px_8px_0px_0px_hsl(230deg_89%_62%),_0px_0px_0px_60px_hsl(214deg_47%_23%_/_50%),_0px_0px_0px_120px_hsl(214deg_47%_23%_/_50%),_0px_0px_0px_180px_hsl(214deg_47%_23%_/_50%)]',
	winner_rock:
		'mix-blend-lighten shadow-[inset_0px_8px_0px_0px_#b8bdd3,_0px_8px_0px_0px_hsl(349,_71%,_52%),_0px_0px_0px_50px_hsl(214deg_47%_23%_/_50%),_0px_0px_0px_75px_hsl(214deg_47%_23%_/_50%),_0px_0px_0px_75px_hsl(214deg_47%_23%_/_50%)] md:shadow-[inset_0px_8px_0px_0px_#b8bdd3,_0px_8px_0px_0px_hsl(349,_71%,_52%),_0px_0px_0px_60px_hsl(214deg_47%_23%_/_50%),_0px_0px_0px_120px_hsl(214deg_47%_23%_/_50%),_0px_0px_0px_180px_hsl(214deg_47%_23%_/_50%)]',
	winner_scissor:
		'mix-blend-lighten shadow-[inset_0px_8px_0px_0px_#b8bdd3,_0px_8px_0px_0px_hsl(39,_89%,_49%),_0px_0px_0px_50px_hsl(214deg_47%_23%_/_50%),_0px_0px_0px_75px_hsl(214deg_47%_23%_/_50%),_0px_0px_0px_75px_hsl(214deg_47%_23%_/_50%)] md:shadow-[inset_0px_8px_0px_0px_#b8bdd3,_0px_8px_0px_0px_hsl(39,_89%,_49%),_0px_0px_0px_60px_hsl(214deg_47%_23%_/_50%),_0px_0px_0px_120px_hsl(214deg_47%_23%_/_50%),_0px_0px_0px_180px_hsl(214deg_47%_23%_/_50%)]'
}

const Symbol = {}

const Paper = ({ size = 'normal', winner = false, gameDraw, onClick }) => (
	<div
		onClick={() => {
			onClick && onClick()
		}}
		title="paper"
		className={`z-10 flex h-36 w-36 ${SymbolConfig[size]} ${
			winner && !gameDraw && SymbolConfig.winner_paper
		} cursor-pointer items-center justify-center rounded-full 
          
         border-paper-outline bg-white ${
				!winner &&
				'shadow-[inset_0px_8px_0px_0px_#b8bdd3,_0px_8px_0px_0px_hsl(230deg_89%_62%)] hover:scale-110'
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
		className={`z-10 flex h-36 w-36 ${SymbolConfig[size]} ${
			winner && !gameDraw && SymbolConfig.winner_rock
		} cursor-pointer items-center justify-center 
               self-center rounded-full
             border-rock-outline bg-white ${
					!winner &&
					'shadow-[inset_0px_8px_0px_0px_#b8bdd3,_0px_8px_0px_0px_hsl(349,_71%,_52%)] hover:scale-110'
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
		className={`z-10  flex h-36 w-36 ${SymbolConfig[size]} ${
			winner && !gameDraw && SymbolConfig.winner_scissor
		} cursor-pointer items-center justify-center rounded-full
             border-scissor-outline bg-white ${
					!winner &&
					'shadow-[inset_0px_8px_0px_0px_#b8bdd3,_0px_8px_0px_0px_hsl(39,_89%,_49%)] hover:scale-110'
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
