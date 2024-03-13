type HeadingProps = {
  children: React.ReactNode
}

export default function Heading({ children }: HeadingProps) {
  return (
    <p className="drop-shadow-md font-extrabold md:text-8xl text-5xl text-center text-white">
      {children}
    </p>
  )
}
