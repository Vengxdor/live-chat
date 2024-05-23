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
  return <button onClick={handleSignOut}>Sign Out</button>
}

export default SignOut
