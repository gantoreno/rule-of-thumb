import classNames from "classnames"

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  category: "up" | "down"
}

function IconButton({ className, category, ...rest }: IconButtonProps) {
  return (
    <button
      className={classNames("icon-button", className)}
      aria-label={`thumbs ${category}`}
      {...rest}
    >
      <img
        src={`/assets/img/thumbs-${category}.svg`}
        alt={`thumbs ${category}`}
        width={16}
        height={16}
      />
    </button>
  )
}

export default IconButton
