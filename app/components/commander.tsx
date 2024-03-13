import { commander } from "../lib/types"
import About from "./about"
import CommanderHeading from "./commanderHeading"
import CommanderLink from "./commanderLink"

type CommanderProps = {
  commander: commander
}

export default function Commander({ commander }: CommanderProps) {
  return (
    <li className="bg-stone-100 border flex flex-col gap-5 justify-center hover:scale-105 p-5 transition">
      <CommanderHeading commander={commander} />
      <About>This is a placeholder</About>
      <CommanderLink />
    </li>
  )
}
