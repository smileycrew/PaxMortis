import Image from "next/image";
import { organization } from "../lib/data";

export default function Section() {
    return (
        <section>
            <div className="relative z-[998]">
                <Image className="blur-sm absolute opacity-90 object-cover top-0 w-full" src={organization.home2} alt="" />
                <p className="text-white absolute left-1/2">Hello</p>
            </div>
        </section>
    )
}