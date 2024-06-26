import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="container-xxl" style={{marginTop: "10rem"}}>
      <div className="container-p-y m-5" >

        <div className="p-4 d-flex flex-column justify-content-center align-items-center">
          <h1>Neuron Notes</h1>
          <p>Welcome to Neuron Notes!</p>
          <h5>Where you record all your activities, memories, and other things. Happy notes!</h5>
          <Link to="/login" className="btn btn-primary py-4 d-flex align-items-center btn-icon btn-sm rounded w-50 fs-5"><b>Log in</b></Link><br />
          <Link to="/register" className="btn btn-info py-4 d-flex align-items-center btn-icon btn-sm rounded w-50 fs-5"><b>Sign up</b></Link><br />
        </div>

      </div>
    </div>
  )
}
