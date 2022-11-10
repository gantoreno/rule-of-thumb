import "@testing-library/jest-dom"
import { render } from "@testing-library/react"

import Loader from "../../components/Loader"

describe("Loader", () => {
  it("renders without crashing", () => {
    render(<Loader />)
  })
})
