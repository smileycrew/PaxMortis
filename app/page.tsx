import Members from "./components/members"
import Divider from "./components/divider"
import Intro from "./components/background"
import Section from "./components/intro"
import Founders from "./components/founders"
import Ranks from "./components/ranks"

export default function Home() {
  return (
    <div>
      <Intro />
      <Divider />
      <Section />
      <Founders />
      <Ranks />
      {/* <Members /> */}
    </div>
  )
}
