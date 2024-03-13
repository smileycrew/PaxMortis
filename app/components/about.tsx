import Button from "./button"

export default function About() {
  return (
    <div className="flex flex-col gap-24 ml-24 w-2/6">
      <p className="font-bold text-2xl text-gray-800">
        Pax Mortis is a pvp focused organization with a goal to create a culture
        of competitive players who focus on group combat and to defy the odds
        against us.
      </p>
      <Button />
    </div>
  )
}
