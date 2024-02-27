export default function Header() {
    return (
        <header className="fixed bg-white left-0 flex items-center justify-between p-5 w-full z-[999]">
            {/* <div className="absolute blur-lg bg-black h-full left-0 w-full -z-[999]"></div> */}
            <span className="font-pax text-2xl text-amber-400">Pax Mortis</span>
            <ul className="bg-red-800 flex gap-10 px-5 py-1 rounded-full text-white">
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Legates</li>
            </ul>
        </header>
    )
}