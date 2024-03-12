import Image from "next/image"
import { organization } from "../lib/data"

export default function Background() {
  return (
    <section className="fixed flex flex-col gap-5 h-screen items-center justify-center w-full -z-[999]">
      <Image className="w-[15rem]" src={organization.logo} alt="logo" />
      <h1 className="border-t-[8px] border-amber-400 font-pax text-7xl text-amber-400 underline underline-offset-[5px]">
        Pax Mortis
      </h1>
    </section>
  )
}
