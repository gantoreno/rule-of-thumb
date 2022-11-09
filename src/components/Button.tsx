import classNames from "classnames"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <button className={classNames("button", className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
