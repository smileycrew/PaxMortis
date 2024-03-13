import Heading from "./heading"
import FoundersList from "./foundersList"

export default function Founders() {
  return (
    <div className="flex flex-col min-h-screen gap-36 w-full">
      <Heading>Meet the founders</Heading>
      <FoundersList />
    </div>
  )
}
