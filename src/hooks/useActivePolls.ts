import { trpc } from "../utils/trpc"

function useActivePolls() {
  const query = trpc.people.useQuery()
  const vote = trpc.vote.useMutation().mutate

  return {
    ...query,
    vote,
    people: query.data,
  }
}

export default useActivePolls
