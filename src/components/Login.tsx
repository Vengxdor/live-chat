import { signInWithPopup } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../firebase'

function Login() {
  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error(error)
    }
  }
  return <button onClick={handleLogin}>Login</button>
}

export default Login
