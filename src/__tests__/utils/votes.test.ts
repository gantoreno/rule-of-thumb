import { getVoteDistribution } from "../../utils/votes"

describe("Vote utilities", () => {
  it("gets the correct distributions", () => {
    expect(getVoteDistribution(0, 0)).toStrictEqual({
      positives: 50.0,
      negatives: 50.0,
    })
    expect(getVoteDistribution(1, 3)).toStrictEqual({
      positives: "25.0",
      negatives: "75.0",
    })
    expect(getVoteDistribution(5, 0)).toStrictEqual({
      positives: 100.0,
      negatives: 0,
    })
    expect(getVoteDistribution(0, 4)).toStrictEqual({
      positives: 0,
      negatives: 100.0,
    })
  })
})
