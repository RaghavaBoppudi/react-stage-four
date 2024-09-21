
// conditional rendering - allows to control what gets rendered in the application based on certain conditions
//                         (show, hide, or change components)

import UserGreeting from "./UserGreeting"

function App() {
  return(
    <>
    <UserGreeting isLoggedIn={true} username="rvbpd"/>
    <UserGreeting isLoggedIn={true} />
    <UserGreeting username="rvbpd"/>
    <UserGreeting isLoggedIn={false} username="rvbpd"/>
    </>
  )
}

export default App
