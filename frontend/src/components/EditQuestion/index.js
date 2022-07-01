import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { thunkGetQuestions, thunkUpdateQuestion } from "../../store/questions";


import "./EditQuestion.css";

const EditQuestion = ({ question, hideForm }) => {
  const { showForm, setShowForm } = hideForm;
  const dispatch = useDispatch();
  // console.log(question)
  // const { id } = useParams();
  const [title, setTitle] = useState(question?.title);
  const [description, setDescription] = useState(question?.description);
  const sessionUser = useSelector(state => state.session.user);
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
      setShowForm(false);
    }
  }

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <ul className="errors">
          {onSubmit &&
            validationErrors.map(error => (
              <li key={error}>{error}</li>
            ))
          }
        </ul>
        <div>
          <label htmlFor="title">Title:</label>
          <textarea
            id="title"
            name="title"
            onChange={e => setTitle(e.target.value)}
            value={title}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            onChange={e => setDescription(e.target.value)}
            value={description}
            required
          ></textarea>
        </div>
        <button
          className="form-button"
          type="submit"
        >
          Submit edit
        </button>
        <button
          className="form-button"
          onClick={() => setShowForm(false)}
        >
          Cancel
        </button>
      </form>
    </div>

  );
}


export default EditQuestion;
