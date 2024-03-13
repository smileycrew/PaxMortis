import { members } from "../lib/data";
import Founder from "./founder";

export default function FoundersList() {
  return (
    <ul className="flex flex-col gap-10 lg:grid lg:grid-cols-4">
    {members.map((member) => (
      <Founder key={member.username} member={member} />
    ))}
  </ul>
  )
}
