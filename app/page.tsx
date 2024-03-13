import Members from "./components/members"
import EmptyDivider from "./components/emptyDivider"
import Background from "./components/background"
import Intro from "./components/intro"
import Founders from "./components/founders"
import Ranks from "./components/ranks"
import Commanders from "./components/commanders"

export default function Home() {
  return (
    <div>
      <Background />
      <EmptyDivider />
      <Intro />
      <Founders />
      <Commanders />
      <Ranks />
      {/* <Members /> */}
    </div>
  )
}
