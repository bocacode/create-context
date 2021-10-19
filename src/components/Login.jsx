import { useContext } from 'react'
import { AuthContext } from '../App'

export default function Login() {
  const { setUser, setIsLoggedIn} = useContext(AuthContext)
  const handleLogin = () => {
    setUser({
      name: 'Todd',
      age: 46,
    })
    setIsLoggedIn(true)
  }
  return <button onClick={() => handleLogin()}>Login</button>
}