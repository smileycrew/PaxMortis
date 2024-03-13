import { praetorians } from "../lib/data"
import Heading from "./heading"
import Praetorian from "./praetorian"

export default function Praetorians() {
  return (
    <ul className="md:bg-gray-900/90">
      <Heading>Praetorians</Heading>
      {praetorians.map((praetorian) => (
        <Praetorian key={praetorian.username} />
      ))}
    </ul>
  )
}
