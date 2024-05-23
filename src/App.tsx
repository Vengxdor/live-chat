import Login from './components/Login'
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import LiveChat from './components/LiveChat'

function App() {
  const [user] = useAuthState(auth)

  return (
    <>
      {user ? <LiveChat />:<Login /> }
    </>
  )
}

export default App
