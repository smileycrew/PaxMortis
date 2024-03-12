import Image from "next/image"
import { members } from "../lib/data"

export default function Founders() {
  return (
    <div className="h-screen w-full">
      <ul className="flex flex-wrap gap-3 justify-evenly">
        {members.map((member) => (
          <li
            className="flex flex-col items-center rounded-t"
            key={member.username}
          >
            <Image
              alt="imperator image"
              className="bg-black h-[10rem] rounded-full w-[10rem]"
              src={member.rank}
            />
            <div>
              <p className="text-3xl">{member.username}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
