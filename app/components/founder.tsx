import Image from "next/image"
import { member } from "../lib/types"

type FounderProps = {
  member: member
}

export default function Founder({ member }: FounderProps) {
  return (
    <li
      className="border flex flex-col hover:scale-105 items-center p-10 rounded-t transition"
      key={member.username}
    >
      <Image
        alt="imperator image"
        className="bg-gray-900 h-[10rem] rounded-full w-[10rem]"
        src={member.rank}
      />
      <p className="font-bold text-3xl text-white">{member.username}</p>
    </li>
  )
}
