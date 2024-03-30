import { useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import BackButton from "../../components/BackButton";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const DeleteNotes = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    axios
      .delete(`http://localhost:8000/notes/${id}`)
      .then(() => {
        toast.success("Note deleted successfully");
        setLoading(false);
        navigate("/notes");
      })
      .catch((err) => {
        toast.error(err.response.data.error);
        toast.error(err.response.data.error);
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <div className="d-flex justify-content-between items-center">
        <h1 className="mt-5 fs-4">Delete Note</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{id}</h5>
                <p className="card-text">{id}</p>
                <button className="btn btn-danger" onClick={handleDeleteBook}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteNotes;
