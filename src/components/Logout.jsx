import { useContext } from "react"
import { AuthContext } from "../App"

export default function Logout() {
  const { setUser, setIsLoggedIn } = useContext(AuthContext)
  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }
  return <button onClick={() => handleLogout()}>Logout</button>
}