import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { thunkCreateQuestion } from '../../store/questions';
import './CreateQuestion.css';

const CreateQuestion = ({ hideForm }) => {
  const { showForm, setShowForm } = hideForm;
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  const sessionUser = useSelector(state => state.session.user);
  // console.log(sessionUser.id);

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

  return (
    <form onSubmit={handleSubmit}>
      <ul className="errors">
        {
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
        type="submit"
        disabled={!!validationErrors.length}
      >
        Submit new question
      </button>
      <button onClick={() => hideForm()}>
        Cancel
      </button>
    </form>
  );

}

export default CreateQuestion;
