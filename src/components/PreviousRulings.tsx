import classNames from "classnames"
import { useState } from "react"

import DropdownSelector, { DropdownOption } from "./DropdownSelector"
import VotingCard from "./VotingCard"

import useActivePolls from "../hooks/useActivePolls"
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
  const { people, isLoading, isError, vote, refetch } = useActivePolls()

  const [alreadyVoted, setAlreadyVoted] = useState<{
    [key: string]: boolean | undefined
  }>({})
  const [activeRequests, setActiveRequests] = useState<{
    [key: string]: boolean | undefined
  }>({})
  const [display, setDisplay] = useState<DropdownOption>(DROPDOWN_OPTIONS.list)

  const handleVote = (id: string, category: "positive" | "negative") => {
    setActiveRequests({ ...activeRequests, [id]: true })

    vote(
      { id, category },
      {
        onSuccess: () => {
          setAlreadyVoted({ ...alreadyVoted, [id]: true })
          refetch()
        },
        onSettled: () => {
          setActiveRequests({ ...activeRequests, [id]: undefined })
        },
      }
    )
  }

  const handleVoteAgain = (id: string) => {
    setAlreadyVoted({ ...alreadyVoted, [id]: undefined })
  }

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
              onVote={handleVote}
              onVoteAgain={handleVoteAgain}
              disabled={Boolean(activeRequests[person.id])}
              alreadyVoted={Boolean(alreadyVoted[person.id])}
            />
          ))}
      </div>
    </div>
  )
}

export default PreviousRulings
