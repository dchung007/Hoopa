import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';

import { thunkCreateAnswer } from '../../store/answers';
import './CreateAnswer.css';

const CreateAnswer = ({ hideModal }) => {
  // const { showForm, setShowForm } = hideForm;
  const { id } = useParams();
  // const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [answer, setAnswer] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const [onSubmit, setOnSubmit] = useState(false)

  const sessionUser = useSelector(state => state.session.user);
  // console.log(sessionUser.id);

  useEffect(() => {
    const errors = [];
    if (answer.length > 1500) errors.push("Description cannot exceed 1500 characters.");
    if (answer.length < 5) errors.push("Description must exceed 5 characters.")

    setValidationErrors(errors);
  }, [answer]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validationErrors.length > 0) {
      setOnSubmit(true);
    } else {
      const payload = {
        userId: sessionUser.id,
        questionId: id,
        answer
      };
      // console.log('helloooo');
      let createdAnswer = await dispatch(thunkCreateAnswer(payload));
      // console.log(createdQuestion);
      if (createdAnswer) {
        // console.log('HELPPPPPP----------------')
        // history.push(`/questions/${createdAnswer.questionId}`)
        // hideForm()
        hideModal();
      }
    }
  }
  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <div className="form-title">
          <h1>
            We're all students of the game. Dish out some dimes.
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
              <label htmlFor="answer">Answer:</label>
              <textarea
                id="answer"
                name="answer"
                type="text"
                onChange={e => setAnswer(e.target.value)}
                value={answer}
                required
              ></textarea>
            </div>
          </li>
          <li className="submit-button">
            <button
              className="form-button"
              type="submit"
            >
              Submit new answer
            </button>
          </li>
        </ul>
      </form>
    </div>

  );
}

export default CreateAnswer;
