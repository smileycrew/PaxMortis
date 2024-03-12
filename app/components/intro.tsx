import Image from "next/image"
import { organization } from "../lib/data"
import SectionHeading from "./sectionHeading"

export default function Intro() {
  return (
    <>
      <SectionHeading />

      <section className="flex flex-col gap-5 h-screen items-center relative w-full">
        {/* <Image
          alt="grim hex logo"
          className="absolute object-cover w-full"
          height={0}
          src={organization.home2}
          width={0}
        /> */}

        <section className="flex h-full items-center justify-center w-full">
          <div className="bg-white/90 border p-5 rounded-2xl shadow-md w-1/2">
            <p className="text-xl">
              Pax Mortis is a pvp focused organization. Our goal is to create a
              culture of competitive players and to defy the odds against us.
              Our name and reputation has been carved out by those who have been
              impacted by us. Wether you have heard of us, trained with us,
              confronted us in the verse or part of our organization, you have
              contributed to build our reputation. We continue to grow our
              individual skills but our wrath comes from group focused combat.
            </p>
          </div>
        </section>
      </section>
    </>
  )
}
