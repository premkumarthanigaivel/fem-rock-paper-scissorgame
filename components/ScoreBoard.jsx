const ScoreBoard = ({ matchScore }) => {
  return (
    <section className="mt-12 flex h-40 min-h-[10rem] w-[50%] items-center justify-between rounded-2xl border-2 border-solid border-header-outline px-6">
      <h4 className="whitespace-pre font-barlow text-[2.55rem] leading-[2.05rem] text-white">
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
      </h4>
      <div className="flex h-28 w-36 flex-col items-center rounded-md bg-white p-3 ">
        <h6 className="text-sm font-semibold tracking-wide text-[hsl(229,_64%,_46%)]">
          SCORE
        </h6>
        <span className="font-barlow text-[4rem]  font-bold leading-none text-header-outline">
          {matchScore}
        </span>
      </div>
    </section>
  )
}

export default ScoreBoard
