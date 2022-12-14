import { useState  } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../api/api";

const Update = () => {
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    mail: "",
  });
  let navigate = useNavigate();
  let { id } = useParams();

  const handleChange = (event) => {
    setNewUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };



  // sumbit blog post function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${baseURL}${id}`,newUser);
      navigate("/", { replace: true });
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <div className="form-section">
      <h1 className="form-heading">Update User</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstname" />
            <input
              className="form-input"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="firstname"
              value={newUser.firstname}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="lastname" />
            <input
              className="form-input"
              type="text"
              id="lastname"
              name="lastname"
              value={newUser.lastname}
              placeholder="lastname"
              onChange={handleChange}
              required
            ></input>
          </div>

          <div className="form-control">
            <label htmlFor="mail" />
            <input
              className="form-input"
              type="text"
              id="mail"
              name="mail"
              value={newUser.mail}
              placeholder="mail"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-submit-container">
            <button className="submit-btn" required>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
