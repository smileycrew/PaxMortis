import Button from "./button"

export default function discordButtons() {
  return (
    <div className="flex gap-5">
      <Button
        text="Join the discord"
        url="https://robertsspaceindustries.com/orgs/PAXMORTIS"
      />
      <p className="font-bold self-center text-xl text-gray-800">or</p>
      <Button
        text="Get rekt"
        url="https://robertsspaceindustries.com/orgs/VNGD"
      />
    </div>
  )
}
