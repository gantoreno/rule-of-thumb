/* eslint-disable no-unused-vars */
import { Person } from "@prisma/client"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { useMemo } from "react"

import Button from "./Button"
import IconButton from "./IconButton"

import { getVoteDistribution } from "../utils/votes"

dayjs.extend(relativeTime)

type VotingCardProps = {
  person: Person
  onVote: (id: string, category: "positive" | "negative") => void
  onVoteAgain: (id: string) => void
  alreadyVoted: boolean
}

function VotingCard({
  person,
  onVote,
  onVoteAgain,
  alreadyVoted,
}: VotingCardProps) {
  const voteDistribution = useMemo(
    () => getVoteDistribution(person.positiveVotes, person.negativeVotes),
    [person]
  )
  const overallTrend = useMemo(
    () => (person.positiveVotes > person.negativeVotes ? "up" : "down"),
    [person]
  )

  return (
    <div className="voting-card">
      <div
        className="voting-card__picture-container"
        style={{ backgroundImage: `url(${person.picture})` }}
      ></div>
      <div className="voting-card__picture-gradient"></div>
      <div className="voting-card__information">
        <div className="voting-card__wrapper">
          <div className="voting-card__information-overview">
            <div className="voting-card__information-title">
              <h3>{person.name}</h3>
              <IconButton category={overallTrend} disabled />
            </div>
            <p className="voting-card__information-description">
              {person.description}
            </p>
          </div>
          <div className="voting-card__information-actions">
            <small className="voting-card__information-time">
              {alreadyVoted ? (
                "Thank you for your vote!"
              ) : (
                <>
                  {dayjs().to(dayjs(person.lastUpdated))} in{" "}
                  {person.category.toLocaleLowerCase()}
                </>
              )}
            </small>
            <div className="voting-card__information-button-group">
              {!alreadyVoted && (
                <>
                  <IconButton
                    category="up"
                    onClick={() => onVote(person.id, "positive")}
                  />
                  <IconButton
                    category="down"
                    onClick={() => onVote(person.id, "negative")}
                  />
                </>
              )}
              <Button
                onClick={() => onVoteAgain(person.id)}
                disabled={!alreadyVoted}
              >
                {alreadyVoted ? "Vote Again" : "Vote Now"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="voting-card__progress">
        <div
          className="voting-card__progress-positive"
          style={{ width: `${voteDistribution.positives}%` }}
        >
          <img
            src="/assets/img/thumbs-up.svg"
            alt="thumbs up"
            width={16}
            height={16}
          />
          {voteDistribution.positives}%
        </div>
        <div
          className="voting-card__progress-negative"
          style={{ width: `${voteDistribution.negatives}%` }}
        >
          {voteDistribution.negatives}%
          <img
            src="/assets/img/thumbs-down.svg"
            alt="thumbs down"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  )
}

export default VotingCard
