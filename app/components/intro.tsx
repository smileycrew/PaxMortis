import Image from "next/image";
import { organization } from "../lib/data";

export default function Intro() {
    return (
        <section className="fixed flex flex-col gap-5 h-screen items-center justify-center w-full -z-[999]">
            <Image className="w-[15rem]" src={organization.logo} alt="logo" />
            <h1 className="border-t-[7px] border-black font-pax text-7xl underline underline-offset-[5px]">Pax Mortis</h1>
        </section>
    )
}