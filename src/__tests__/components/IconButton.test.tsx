import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"

import IconButton from "../../components/IconButton"

describe("IconButton", () => {
  it("renders without crashing", () => {
    render(<IconButton category="up" />)
  })

  it("performs an action when clicked", () => {
    const handleClick = jest.fn()

    render(<IconButton category="up" onClick={handleClick} />)

    fireEvent.click(screen.getByRole("button"))

    expect(handleClick).toBeCalledTimes(1)
  })

  it("does not perform an action when disabled", () => {
    const handleClick = jest.fn()

    render(<IconButton category="down" onClick={handleClick} disabled />)

    fireEvent.click(screen.getByRole("button"))

    expect(handleClick).toBeCalledTimes(0)
  })
})
