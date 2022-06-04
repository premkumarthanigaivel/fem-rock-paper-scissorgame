const RulesSection = ({ setModalVisible }) => {
  return (
    <section className="absolute bottom-0 flex h-32 w-full items-center justify-end">
      <div
        className="mr-8 scale-100 rounded-md border-2 border-white px-8 py-2 tracking-wider text-white hover:scale-105"
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
