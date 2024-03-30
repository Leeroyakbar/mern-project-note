import { useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import BackButton from "../../components/BackButton"
import Spinner from "../../components/Spinner"
import { useNavigate, useParams } from "react-router-dom"


const EditNotes = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8000/notes/${id}`)
      .then((res) => {
        setTitle(res.data.title)
        setContent(res.data.content)
        setLoading(false)
      })
      .catch((err) => {
        toast.error(err.response.data.error)
        setLoading(false)
      })
  }, [])

  const handleEditNote = () => {
    const data = {
      title,
      content,
      updated_at: new Date(),
    }
    setLoading(true)

    axios
      .put(`http://localhost:8000/notes/${id}`, data)
      .then(() => {
        toast.success("Note updated successfully")
        setLoading(false)
        navigate("/notes")
      })
      .catch((err) => {
        console.log(err)
        toast.error(err.response.data.error)
        setLoading(false)
      })
  }

  return (
    <div className="p-4">
      <BackButton />
      <div className="d-flex justify-content-between items-center">
        <h1 className="mt-5 fs-4">Edit Note</h1>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="content" className="form-label">
                  Content
                </label>
                <textarea
                  className="form-control"
                  id="content"
                  rows="3"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
              <button
                className="btn btn-primary"
                onClick={handleEditNote}
                disabled={loading}
              >
                {loading ? <Spinner /> : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditNotes
