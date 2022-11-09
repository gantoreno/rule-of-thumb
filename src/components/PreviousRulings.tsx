import classNames from "classnames"
import { useState } from "react"
import DropdownSelector, { DropdownOption } from "./DropdownSelector"

import VotingCard from "./VotingCard"

const person = {
  name: "Kanye West",
  description:
    "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
  category: "entertainment",
  picture: "/assets/img/kanye.png",
  lastUpdated: "2020-03-10T23:08:57.892Z",
  votes: {
    positive: 23,
    negative: 36,
  },
}

const DROPDOWN_OPTIONS: { [key: string]: DropdownOption } = {
  list: {
    name: "List",
    value: "list",
  },
  grid: {
    name: "Grid",
    value: "grid",
  },
}

function PreviousRulings() {
  const [display, setDisplay] = useState<DropdownOption>(DROPDOWN_OPTIONS.list)

  return (
    <div className="rulings" aria-label="Previous Rulings">
      <div className="rulings__top">
        <h2 className="rulings__title">Previous Rulings</h2>
        <DropdownSelector
          value={display}
          options={[DROPDOWN_OPTIONS.list, DROPDOWN_OPTIONS.grid]}
          onSelect={setDisplay}
        />
      </div>
      <div className={classNames("rulings__carousel", display.value)}>
        <VotingCard person={person} />
      </div>
    </div>
  )
}

export default PreviousRulings
