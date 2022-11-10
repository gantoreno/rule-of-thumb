import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"

import Button from "../../components/Button"

describe("Button", () => {
  it("renders without crashing", () => {
    render(<Button>Hello</Button>)
  })

  it("performs an action when clicked", () => {
    const handleClick = jest.fn()

    render(<Button onClick={handleClick}>Clickable Button</Button>)

    fireEvent.click(screen.getByText(/clickable/i))

    expect(handleClick).toBeCalledTimes(1)
  })

  it("does not perform an action when disabled", () => {
    const handleClick = jest.fn()

    render(
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>
    )

    fireEvent.click(screen.getByText(/disabled/i))

    expect(handleClick).toBeCalledTimes(0)
  })
})
