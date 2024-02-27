import Image from "next/image"
import { organization } from "../lib/data"

export default function Header() {
    return (
        <header className="flex flex-col gap-5 items-center p-32">
            <h1 className="border-t-[4.5px] border- border-black font-pax text-5xl underline">Pax Mortis</h1>
            <Image className="w-[15rem]" src={organization.logo} alt="logo" />
        </header>

    )
}