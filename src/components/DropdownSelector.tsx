import classNames from "classnames"
import { useClickAway } from "react-use"
import { useRef, useState } from "react"

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
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      ref={ref}
    >
      <button className="dropdown__option" onClick={() => setIsOpen(!isOpen)}>
        {value.name}
      </button>
      {isOpen && (
        <ul
          className="dropdown__options"
          role="listbox"
          aria-activedescendant={value.value}
          tabIndex={-1}
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value == value.value}
              tabIndex={0}
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
