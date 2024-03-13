import Image from "next/image"
import { members } from "../lib/data"
import Heading from "./heading"

export default function Founders() {
  return (
    <div className="flex flex-col h-screen gap-36 w-full">
      <Heading>Meet the founders</Heading>
      <ul className="flex flex-col gap-10 lg:grid lg:grid-cols-4">
        {members.map((member) => (
          <li
            className="border flex flex-col hover:scale-105 items-center p-10 rounded-t transition"
            key={member.username}
          >
            <Image
              alt="imperator image"
              className="bg-gray-900 h-[10rem] rounded-full w-[10rem]"
              src={member.rank}
            />
            <div>
              <p className="font-bold text-3xl text-white">{member.username}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
