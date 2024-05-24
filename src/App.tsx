import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Messages from './components/Messages'
import Login from './components/Login'
import PhoneButtons from './components/PhoneButtons'
import PhoneHeader from './components/PhoneHeader'

function App() {
  const [user] = useAuthState(auth)

  return (
    <section className="flex h-[700px] min-w-96 flex-col rounded-3xl bg-black ">
      <PhoneHeader />
      <main className="relative h-full p-6">
        {user ? <Messages user={user} /> : <Login />}
        <PhoneButtons />
      </main>
    </section>
  )
}

export default App
