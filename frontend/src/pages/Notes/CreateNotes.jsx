import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import BackButton from "../../components/BackButton"
import Spinner from "../../components/Spinner"
import { useNavigate } from "react-router-dom"


const CreateNotes = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSaveNote = () => {
    const data = {
      title,
      content,
      created_at: new Date(),
      updated_at: new Date(),
    }
    setLoading(true)

    axios
      .post("http://localhost:8000/notes", data)
      .then(() => {
        toast.success("Note created successfully")
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
        <h1 className="mt-5 fs-4">Create Note</h1>
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
                onClick={handleSaveNote}
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

export default CreateNotes
