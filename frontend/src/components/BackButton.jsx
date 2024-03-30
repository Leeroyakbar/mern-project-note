import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
export default function BackButton({ dest = "/notes" }) {
  return (
    <div className="d-flex">
      <Link
        to={dest}
        className="btn btn-primary me-2 d-flex align-items-center gap-2 btn-icon btn-sm rounded"
      >
        <BsArrowLeft className="fs-4" />
      </Link>
    </div>
  );
}
