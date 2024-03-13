import CommandersList from "./commandersList"
import Heading from "./heading"

export default function Commanders() {
  return (
    <section className="flex flex-col min-h-screen gap-36 w-full">
      <Heading>Commanders</Heading>
      <CommandersList />
    </section>
  )
}
