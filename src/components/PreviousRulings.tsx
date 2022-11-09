import classNames from "classnames"
import { useState } from "react"

import DropdownSelector, { DropdownOption } from "./DropdownSelector"
import VotingCard from "./VotingCard"

import usePeople from "../hooks/usePeople"
import InfoBox from "./InfoBox"
import Loader from "./Loader"

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
  const { people, isLoading, isError, vote, refetch } = usePeople()

  const [alreadyVoted, setAlreadyVoted] = useState<{
    [key: string]: boolean | undefined
  }>({})
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
      {isLoading && <Loader />}
      {isError && (
        <InfoBox type="error">
          Something went wrong, please try again later!
        </InfoBox>
      )}
      <div className={classNames("rulings__carousel", display.value)}>
        {people &&
          people.map((person) => (
            <VotingCard
              key={person.id}
              person={person}
              onVote={(id, category) => {
                vote(
                  { id, category },
                  {
                    onSuccess: () => {
                      setAlreadyVoted({ ...alreadyVoted, [id]: true })
                      refetch()
                    },
                  }
                )
              }}
              onVoteAgain={(id) => {
                setAlreadyVoted({ ...alreadyVoted, [id]: undefined })
              }}
              alreadyVoted={Boolean(alreadyVoted[person.id])}
            />
          ))}
      </div>
    </div>
  )
}

export default PreviousRulings
