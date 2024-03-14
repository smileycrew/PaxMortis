import IntroHeading from "./introHeading"
import About from "./about"
import DiscordButtons from "./discordButtons"

export default function Intro() {
  return (
    <section className="flex flex-col gap-24 min-h-screen p-3 w-full">
      <IntroHeading />
      <About>
        Pax Mortis is a pvp focused organization with a goal to create a culture
        of competitive players who focus on group combat and to defy the odds
        against us.
      </About>
      <DiscordButtons />
    </section>
  )
}

// Our name and reputation has been carved out by those who have been
// impacted by us. Wether you have heard of us, trained with us,
// confronted us in the verse or part of our organization, you have
// contributed to build our reputation. We continue to grow our
// individual skills but our wrath comes from group focused combat.
