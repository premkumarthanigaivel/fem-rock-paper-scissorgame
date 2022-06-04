/* eslint-disable @next/next/no-img-element */
const RulesModal = ({ visible, setVisible }) => {
  return (
    <dialog
      open={visible}
      className="z-10 h-screen w-screen rounded-md p-6 md:mt-48 md:h-auto md:w-[400px]"
    >
      <div className="flex items-center justify-between">
        <h4 className="text-center font-barlow text-3xl font-extrabold text-header-outline md:text-left">
          RULES
        </h4>
        <img
          src="icon-close.svg"
          alt=""
          className="h-4 w-4 select-none hover:scale-110"
          onClick={() => {
            setVisible(false)
          }}
        />
      </div>
      <img src="image-rules.svg" alt="" className="mx-auto mt-10 select-none" />
    </dialog>
  )
}

export default RulesModal
