import classNames from "classnames"
import { useClickAway } from "react-use"
import { useId, useRef, useState } from "react"

export type DropdownOption = {
  name: string
  value: string
}

type DropdownSelectorProps = {
  value: DropdownOption
  options: DropdownOption[]
  // eslint-disable-next-line no-unused-vars
  onSelect?: (option: DropdownOption) => void
}

function DropdownSelector({ value, options, onSelect }: DropdownSelectorProps) {
  const ref = useRef(null)
  const id = useId()

  const [isOpen, setIsOpen] = useState(false)

  useClickAway(ref, () => {
    setIsOpen(false)
  })

  const handleKeyDown = (e: React.KeyboardEvent, option: DropdownOption) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault()
        onSelect?.(option)
        setIsOpen(false)
        break
      default:
        break
    }
  }

  return (
    <div
      className={classNames("dropdown", {
        open: isOpen,
      })}
      ref={ref}
    >
      <button
        aria-label="Select list style"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={id}
        aria-haspopup="listbox"
        tabIndex={0}
        className="dropdown__option"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value.name}
      </button>
      {isOpen && (
        <ul id={id} role="listbox" tabIndex={-1} className="dropdown__options">
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value == value.value}
              className={classNames("dropdown__option", {
                "dropdown__option-selected": option.value === value.value,
              })}
              onKeyDown={(evt) => handleKeyDown(evt, option)}
              onClick={() => {
                onSelect?.(option)
                setIsOpen(false)
              }}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownSelector
