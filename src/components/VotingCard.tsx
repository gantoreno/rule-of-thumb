import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

import Button from "./Button"
import IconButton from "./IconButton"

dayjs.extend(relativeTime)

type VotingCardProps = {
  person: {
    name: string
    description: string
    category: string
    picture: string
    lastUpdated: string
    votes: {
      positive: number
      negative: number
    }
  }
}

function VotingCard({ person }: VotingCardProps) {
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
              <IconButton category="down" disabled />
            </div>
            <p className="voting-card__information-description">
              {person.description}
            </p>
          </div>
          <div className="voting-card__information-actions">
            <small className="voting-card__information-time">
              {dayjs().to(dayjs(person.lastUpdated))} in {person.category}
            </small>
            <div className="voting-card__information-button-group">
              <IconButton category="up" />
              <IconButton category="down" />
              <Button>Vote Now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="voting-card__progress">
        <div
          className="voting-card__progress-positive"
          style={{ width: `${25}%` }}
        >
          <img
            src="/assets/img/thumbs-up.svg"
            alt="thumbs up"
            width={16}
            height={16}
          />
          25%
        </div>
        <div
          className="voting-card__progress-negative"
          style={{ width: `${75}%` }}
        >
          75%
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
