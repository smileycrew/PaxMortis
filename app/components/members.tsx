import Image from "next/image"
import { members } from "../lib/data"

export default function Members() {
  return (
    <section className="h-screen">
      <ul className="gap-5 grid grid-cols-3 px-10 text-white w-2/3">
        {members.map((member, index) => (
          <li
            className="bg-gradient-to-r from-indigo-500 to-gray-900 bg-repeat-y border border-teal-400 grid grid-cols-[1fr,2fr] p-3"
            key={index}
          >
            <Image
              className="border border-teal-400 p-1"
              src={member.image}
              alt=""
              width={60}
              height={60}
            />
            <div className="divide-y divide-teal-400 flex flex-col justify-between">
              <p className=" text-teal-400">{member.username}</p>
              <p className="text-teal-400">{member.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
