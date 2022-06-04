/* eslint-disable @next/next/no-img-element */
import Symbol from "components/Symbol"
import SYMBOLS from "components/enums/SYMBOLS"
import { useEffect, useRef } from "react"
import React from "react"

const useEffectSkipFirst = (func, deps) => {
  const isFirst = useRef(true)
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }
    func()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

const Page = {}

const SymbolSelector = ({ setSelectedSymbol }) => {
  return (
    <section className="mt-12 w-[28rem]">
      <div className="relative flex flex-col">
        <img
          src="bg-triangle.svg"
          alt="traingle"
          className="absolute left-16 top-16 select-none"
        />
        <div className="flex justify-between">
          <Symbol.Paper
            onClick={() => {
              setSelectedSymbol("Paper")
            }}
          />
          <Symbol.Scissor
            onClick={() => {
              setSelectedSymbol("Scissor")
            }}
          />
        </div>
        <Symbol.Rock
          onClick={() => {
            setSelectedSymbol("Rock")
          }}
        />
      </div>
    </section>
  )
}

const SymbolCard = ({ title, symbol }) => (
  <div className="flex h-60 flex-col items-center justify-between transition-all">
    <h6 className="text-xl text-white">{title}</h6>
    {symbol === SYMBOLS.PAPER && <Symbol.Paper size="large" />}
    {symbol === SYMBOLS.SCISSOR && <Symbol.Scissor size="large" />}
    {symbol === SYMBOLS.ROCK && <Symbol.Rock size="large" />}
  </div>
)

const MatchStatus = ({ matchStat, resetGamePlay }) => (
  <div className="flex flex-col items-center justify-center transition-all">
    <h3 className="white font-barlow text-5xl font-extrabold text-white">
      {matchStat}
    </h3>
    <div
      onClick={resetGamePlay}
      className="mt-4  w-full scale-100 cursor-pointer rounded-md border-2 border-white bg-white px-8 py-2 text-center text-xs font-semibold  text-[hsl(349,_70%,_56%)] hover:border-0 hover:bg-[hsl(349,_70%,_56%)] hover:text-white"
    >
      PLAY AGAIN
    </div>
  </div>
)

const GameplayConfig = {
  "container-small": "w-[30%]",
  "container-large": "w-[50%]",
}

const GamePlay = props => {
  const {
    selectedSymbol,
    houseSymbol,
    matchStat,
    resetGamePlay,
    getMatchStatus,
  } = props

  console.log("props: ", props)

  console.log("matchStat: ", matchStat)

  useEffectSkipFirst(() => {
    if (selectedSymbol && houseSymbol) {
      console.log("CALLING: getMatchStatus ")
      getMatchStatus()
    }
  }, [selectedSymbol, houseSymbol, getMatchStatus])

  return (
    <section
      className={`mt-16 ${GameplayConfig["container-large"]} transition-all`}
    >
      <div className="flex w-full items-center justify-between transition-all">
        <SymbolCard title="YOU PICKED" symbol={selectedSymbol} />
        <MatchStatus matchStat={matchStat} resetGamePlay={resetGamePlay} />
        <SymbolCard title="THE HOUSE PICKED" symbol={houseSymbol} />
      </div>
    </section>
  )
}

Page.SymbolSelector = React.memo(SymbolSelector)
Page.GamePlay = React.memo(GamePlay)

export default Page
