import { commanders } from "../lib/data"
import Commander from "./commander"

export default function CommandersList() {
  return (
    <ul className="flex flex-col gap-10 lg:grid lg:grid-cols-4">
      {commanders.map((commander) => (
        <Commander commander={commander} key={commander.username} />
      ))}
    </ul>
  )
}
