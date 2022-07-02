import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { thunkCreateQuestion } from '../../store/questions';
import './CreateQuestion.css';

const CreateQuestion = ({ setShowModal }) => {
  // const { showForm, setShowForm } = hideForm;
  // const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const [onSubmit, setOnSubmit] = useState(false)

  const sessionUser = useSelector(state => state.session.user);
  // console.log(sessionUser.id);

  useEffect(() => {
    const errors = [];
    if (title.length > 250) errors.push("Title cannot exceed 250 characters.");
    if (title.length < 5) errors.push("Title must exceed 5 characters.");
    if (description.length > 500) errors.push("Description cannot exceed 500 characters.");
    if (description.length < 5) errors.push("Description must exceed 5 characters.")

    setValidationErrors(errors);
  }, [title, description]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validationErrors.length > 0) {
      setOnSubmit(true);
    } else {
      const payload = {
        ownerId: sessionUser.id,
        title,
        description
      };
      // console.log('helloooo');
      let createdQuestion = await dispatch(thunkCreateQuestion(payload));
      // console.log(createdQuestion);
      if (createdQuestion) {
        // console.log('HELPPPPPP----------------')
        history.push(`/questions/${createdQuestion.id}`)
      }
    }

  }

  return (
    <div className="form-div">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-title">
          <h2>
            Further your knowledge of the game
          </h2>
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
              Submit
            </button>
          </li>
        </ul>
      </form>
    </div >

  );

}

export default CreateQuestion;
