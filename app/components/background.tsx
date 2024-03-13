import Image from "next/image"
import { organization } from "../lib/data"

export default function Background() {
  return (
    <div className="fixed flex flex-col gap-5 h-screen items-center justify-center w-full -z-[999]">
      <Image className="w-[15rem]" src={organization.logo} alt="logo" />
      <h1 className="font-pax md:border-t-[7px] md:border-amber-400 md:underline md:underline-offset-[5px] md:text-7xl text-6xl text-amber-400">
        Pax Mortis
      </h1>
    </div>
  )
}
