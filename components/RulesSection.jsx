const RulesSection = ({ setModalVisible }) => {
	return (
		<section className="absolute bottom-4 flex h-24 w-full items-center justify-center md:bottom-0 md:h-32 md:justify-end">
			<div
				className="mt-8 scale-100 rounded-md border-2 border-white px-8 py-2 tracking-wider text-white hover:scale-105 md:mt-0 md:mr-8"
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
