export function getVoteDistribution(positives: number, negatives: number) {
  if (positives === 0 && negatives === 0) {
    return {
      positives: 50,
      negatives: 50,
    }
  }

  if (positives === 0) {
    return {
      positives: 0,
      negatives: 100,
    }
  }

  if (negatives === 0) {
    return {
      positives: 100,
      negatives: 0,
    }
  }

  return {
    positives: ((positives / (positives + negatives)) * 100).toFixed(1),
    negatives: ((negatives / (positives + negatives)) * 100).toFixed(1),
  }
}
