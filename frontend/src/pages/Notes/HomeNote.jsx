import { useEffect, useState } from "react"
import axios from "axios"
import Spinner from "../../components/Spinner"
import toast from "react-hot-toast";
import { Link } from "react-router-dom"
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const HomeNote = () => {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:8000/notes')
      .then(res => {
        setNotes(res.data.data)
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
      <div className="d-flex justify-content-between items center">
        <h1 className="my-8 fs-4">Notes List</h1>
        <Link to='/notes/create'>
          <MdOutlineAddBox className="fs-2 text-primary" />
        </Link>
      </div>

      { loading ? (
        <Spinner />
      ) : (
        <div className="row">
          {notes.map(note => (
            <div className="col-md-4 mb-4" key={note._id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{note.description}</p>
                  <div className="d-flex justify-content-between">
                    <Link to={`/notes/edit/${note._id}`}>
                      <AiOutlineEdit className="fs-4 text-primary" />
                    </Link>
                    <Link to={`/notes/show/${note._id}`}>
                      <BsInfoCircle className="fs-4 text-primary" />
                    </Link>
                    <Link to={`/notes/delete/${note._id}`}>
                      <MdOutlineDelete className="fs-4 text-primary" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
      }
    </div>
  )
}

export default HomeNote