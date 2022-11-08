import { trpc } from "../utils/trpc"

function IndexPage() {
  const hello = trpc.hello.useQuery()

  if (!hello.data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>{hello.data}</h1>
    </div>
  )
}

export default IndexPage
