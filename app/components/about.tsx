type AboutProps = {
  children: React.ReactNode
}

export default function About({ children }: AboutProps) {
  return <p className="font-bold lg:w-2/6 text-2xl text-gray-800">{children}</p>
}
