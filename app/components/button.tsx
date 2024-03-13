export default function Button() {
  return (
    <div className="flex flex-col gap-5">
      <label className="font-bold text-xl text-gray-800" htmlFor="discord">
        Join the discord or
      </label>
      <button
        className="active:scale-105 border-2 border-white font-bold hover:scale-110 p-3 self-start text-xl text-gray-800 transition w-full"
        id="discord"
      >
        Get rekt
      </button>
    </div>
  )
}
