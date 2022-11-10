import { Category } from "@prisma/client"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import VotingCard from "../../components/VotingCard"

const testPerson = {
  id: "claa2gzw70000xjgsyjzs6zcj",
  index: 1,
  name: "Kanye West",
  description:
    "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
  category: "ENTERTAINMENT" as Category,
  picture: "https://ruleofthumb.s3.us-east-2.amazonaws.com/pictures/kanye.png",
  lastUpdated: new Date("2020-03-10T23:08:57.892Z"),
  positiveVotes: 71,
  negativeVotes: 40,
}

describe("VotingCard", () => {
  it("renders without crashing", () => {
    render(
      <VotingCard
        person={testPerson}
        onVote={jest.fn()}
        onVoteAgain={jest.fn()}
        alreadyVoted={false}
        disabled={false}
      />
    )
  })

  it("doesn't vote if no option is selected", () => {
    const handleVote = jest.fn()

    render(
      <VotingCard
        person={testPerson}
        onVote={handleVote}
        onVoteAgain={jest.fn()}
        alreadyVoted={false}
        disabled={false}
      />
    )

    fireEvent.click(screen.getByText("Vote Now"))

    expect(handleVote).not.toHaveBeenCalled()
  })

  it("votes if an option is selected", () => {
    const handleVote = jest.fn()

    render(
      <VotingCard
        person={testPerson}
        onVote={handleVote}
        onVoteAgain={jest.fn()}
        alreadyVoted={false}
        disabled={false}
      />
    )

    fireEvent.click(
      screen.getByLabelText("thumbs up", {
        selector: ":not(:disabled)",
      })
    )
    fireEvent.click(screen.getByText("Vote Now"))

    expect(handleVote).toHaveBeenCalledTimes(1)
  })

  it("allows to vote again", () => {
    const handleVoteAgain = jest.fn()

    render(
      <VotingCard
        person={testPerson}
        onVote={jest.fn()}
        onVoteAgain={handleVoteAgain}
        alreadyVoted={true}
        disabled={false}
      />
    )

    fireEvent.click(screen.getByText("Vote Again"))

    expect(handleVoteAgain).toHaveBeenCalledTimes(1)
  })

  it("does not vote if disabled", () => {
    const handleVote = jest.fn()

    render(
      <VotingCard
        person={testPerson}
        onVote={handleVote}
        onVoteAgain={jest.fn()}
        alreadyVoted={false}
        disabled={true}
      />
    )

    fireEvent.click(screen.getByLabelText("thumbs down"))
    fireEvent.click(screen.getByText("Vote Now"))

    expect(handleVote).not.toHaveBeenCalled()
  })
})
