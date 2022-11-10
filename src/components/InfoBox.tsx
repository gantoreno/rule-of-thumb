import classNames from "classnames"

type InfoBoxProps = {
  type: "none" | "error"
  children: React.ReactNode
}

function InfoBox({ type, children }: InfoBoxProps) {
  return (
    <div role="alert" className={classNames("info", type)}>
      {children}
    </div>
  )
}

export default InfoBox
