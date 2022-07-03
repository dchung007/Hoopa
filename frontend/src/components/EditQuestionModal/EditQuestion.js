import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { thunkUpdateQuestion } from "../../store/questions";

import "./EditQuestion.css";

const EditQuestion = ({ question, hideModal }) => {
  // const { showForm, setShowForm } = hideForm;
  const dispatch = useDispatch();
  // console.log(question)
  // const { id } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState(question?.title);
  const [description, setDescription] = useState(question?.description);
  // const sessionUser = useSelector(state => state.session.user);
  const [validationErrors, setValidationErrors] = useState([]);
  const [onSubmit, setOnSubmit] = useState(false);

  useEffect(() => {
    const errors = [];
    if (title.length > 250) errors.push("Title cannot exceed 250 characters.");
    if (title.length < 5) errors.push("Title must exceed 5 characters.");
    if (description.length > 1000) errors.push("Description cannot exceed 1000 characters.");
    if (description.length < 5) errors.push("Description must exceed 5 characters.")

    setValidationErrors(errors);
  }, [title, description]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validationErrors.length > 0) {
      setOnSubmit(true);
    } else {
      const payload = {
        ...question,
        title,
        description
      };
      // // console.log('helloooo');
      const updatedQuestion = await dispatch(thunkUpdateQuestion(payload));
      // setShowForm(false);
      if (updatedQuestion) {
        // history.push(`/questions/${updatedQuestion.id}`)
        hideModal();
      }
    }
  }

  return (
    <div className="form-div">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-title">
          <h1>
            Perfect your craft.
          </h1>
        </div>
        <ul className="login-form-list">
          <ul className="errors">
            {onSubmit &&
              validationErrors.map(error => (
                <li key={error}>{error}</li>
              ))
            }
          </ul>
          <li>
            <div>
              <label htmlFor="title">Title:</label>
              <textarea
                id="title"
                name="title"
                type="text"
                onChange={e => setTitle(e.target.value)}
                value={title}
                required
              ></textarea>
            </div>
          </li>
          <li>
            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                type="text"
                onChange={e => setDescription(e.target.value)}
                value={description}
                required
              ></textarea>
            </div>
          </li>
          <li className="submit-button">
            <button
              className="form-button"
              type="submit"
            >
              Submit edit
            </button>
          </li>
        </ul>
      </form>
    </div>

  );
}


export default EditQuestion;
