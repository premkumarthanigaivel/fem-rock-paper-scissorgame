const RulesModal = ({ visible, closeModal }) => {
	return (
		<dialog
			open={visible}
			className="z-10 h-screen w-screen p-6 md:mt-48 md:h-auto md:w-[400px] md:rounded-md"
		>
			<div className="relative flex h-full flex-col items-center">
				<h4 className="font-barlow text-3xl font-extrabold text-header-outline md:self-start ">
					RULES
				</h4>
				<img
					src="image-rules.svg"
					alt=""
					className="mx-auto mt-24 select-none  md:mt-10"
				/>
				<img
					src="icon-close.svg"
					alt=""
					className="mt-auto mb-16 h-4 w-4 select-none hover:scale-110 md:absolute md:top-4 md:right-4"
					onClick={closeModal}
				/>
			</div>
		</dialog>
	)
}

export default RulesModal
