import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"

import DropdownSelector, {
  DropdownOption,
} from "../../components/DropdownSelector"

const testOptions: DropdownOption[] = [
  { name: "Option 1", value: "option-1" },
  { name: "Option 2", value: "option-2" },
  { name: "Option 3", value: "option-3" },
  { name: "Option 4", value: "option-4" },
]

describe("DropdownSelector", () => {
  it("renders without crashing", () => {
    render(<DropdownSelector value={testOptions[0]} options={testOptions} />)
  })

  it("changes the value", () => {
    const handleSelect = jest.fn()

    render(
      <DropdownSelector
        value={testOptions[0]}
        options={testOptions}
        onSelect={handleSelect}
      />
    )

    fireEvent.click(screen.getByRole("button"))
    fireEvent.click(screen.getByText(/option 3/i))

    expect(handleSelect).toHaveBeenCalledWith(testOptions[2])
  })
})
