import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import InfoBox from "../../components/InfoBox"

describe("InfoBox", () => {
  it("renders without crashing", () => {
    render(<InfoBox type="none">Information</InfoBox>)
  })

  it("displays proper text", () => {
    render(<InfoBox type="none">Content</InfoBox>)

    expect(screen.getByRole("alert")).toHaveTextContent("Content")
  })
})
