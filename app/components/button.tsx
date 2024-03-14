type ButtonProps = {
  text: string
  url: string
}

export default function Button({ text, url }: ButtonProps) {
  return (
    <button
      className="active:scale-105 border-2 border-white font-bold hover:scale-110 md:w-auto p-3 self-start text-xl text-gray-800 transition w-full"
      id="discord"
    >
      <a href={`${url}`} target="_blank">
        {text}
      </a>
    </button>
  )
}
