import { trpc } from "../utils/trpc"

function usePeople() {
  const query = trpc.people.useQuery()
  const vote = trpc.vote.useMutation().mutate

  return {
    ...query,
    vote,
    people: query.data,
  }
}

export default usePeople
