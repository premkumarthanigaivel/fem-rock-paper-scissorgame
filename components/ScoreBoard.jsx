const ScoreBoard = ({ matchScore }) => {
  return (
    <section className="mt-8 flex h-40 min-h-[9rem] w-11/12 items-center justify-between rounded-2xl border-2 border-solid border-header-outline px-6 md:mt-12 md:min-h-[10rem] md:w-[50%]">
      <h4 className="whitespace-pre font-barlow text-4xl leading-8 text-white md:text-[2.55rem] md:leading-[2.05rem]">
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
      </h4>
      <div className="flex h-28 w-32 flex-col items-center rounded-md bg-white p-3 md:w-36 ">
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
