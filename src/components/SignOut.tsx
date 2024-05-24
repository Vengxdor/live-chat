import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

function SignOut() {
  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <button
      className="relative z-50 rounded-xl bg-red-700 p-1 px-2 transition duration-300 hover:bg-red-500"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  )
}

export default SignOut
