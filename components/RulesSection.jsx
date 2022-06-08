const RulesSection = ({ setModalVisible }) => {
	return (
		<section className="static mt-[5.5rem] mb-10 flex w-full items-center justify-center md:absolute md:bottom-0 md:mt-0 md:mb-0 md:h-32 md:justify-end">
			<div
				className="scale-100 rounded-md border-2 border-white px-8 py-2 tracking-wider text-white hover:scale-105 md:mt-8  md:mr-8"
				onClick={() => {
					setModalVisible(true)
				}}
			>
				RULES
			</div>
		</section>
	)
}

export default RulesSection
