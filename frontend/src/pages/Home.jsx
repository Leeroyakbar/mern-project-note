import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="p-4">
      <h1>Home</h1>
      <p>Welcome to your dashboard!</p>
      <Link to="/login">Login</Link><br />
      <Link to="/register">Signup</Link>
    </div>
  )
}
