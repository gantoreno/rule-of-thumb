import classNames from "classnames"

type InfoBoxProps = {
  type: "none" | "error"
  children: React.ReactNode
}

function InfoBox({ type, children }: InfoBoxProps) {
  return <div className={classNames("info", type)}>{children}</div>
}

export default InfoBox
