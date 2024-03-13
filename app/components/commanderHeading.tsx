import Image from "next/image"
import { commander } from "../lib/types"

type CommanderHeadingProps = {
  commander: commander
}

export default function CommanderHeading({ commander }: CommanderHeadingProps) {
  return (
    <div className="flex gap-10 items-center">
      <p className="font-bold text-3xl text-gray-800">{commander.username}</p>
      {/* <Image
        alt="imperator image"
        className="bg-gray-900 h-[5rem] rounded-full w-[5rem]"
        src={commander.rank}
      /> */}
    </div>
  )
}
