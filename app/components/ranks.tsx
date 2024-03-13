import Legionnaires from "./legionnaires"
import Praetorians from "./praetorians"
import Virtus from "./virtus"

export default function Ranks() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[1fr,2fr,1fr]">
      <Praetorians />

      <Legionnaires />

      <Virtus />
    </div>
  )
}
