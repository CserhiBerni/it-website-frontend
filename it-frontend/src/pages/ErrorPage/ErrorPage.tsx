import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";
import { FaMapMarkedAlt } from "react-icons/fa";

export const ErrorPage = () => {
  let navigate = useNavigate();

  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Not Found &nbsp; <FaMapMarkedAlt /></h2>
      <p>There are destinations even we can't take you to <br />:(</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Return Home
      </button>
    </div>
  );
};
