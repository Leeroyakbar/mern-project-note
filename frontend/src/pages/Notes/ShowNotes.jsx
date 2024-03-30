import { useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import BackButton from "../../components/BackButton"
import Spinner from "../../components/Spinner"


const ShowNotes = () => {
  const [note, setNote] = useState({})
  const [loading, setLoading] = useState(false)
  const {id} = useParams();

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8000/notes/${id}`)
      .then(res => {
        setNote(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        toast.error(err.response.data.error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="p-4">
      <BackButton />
      <div className="d-flex justify-content-between items-center">
        <h1 className="mt-5 fs-4">{note.title}</h1>
      </div>
      { loading ? (
        <Spinner />
      ) : (
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">{note.content}</p>
                <small className="text-muted">Dibuat : <br />{new Date(note.created_at).toString()}</small><br />
                <small className="text-muted">Diperbarui : <br />{new Date(note.updated_at).toString()}</small>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowNotes
