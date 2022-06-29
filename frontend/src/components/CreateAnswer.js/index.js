import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';

import { thunkCreateAnswer } from '../../store/answers';


const CreateAnswer = ({ hideForm }) => {
  // const { showForm, setShowForm } = hideForm;
  const { id } = useParams();
  // const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [answer, setAnswer] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  const sessionUser = useSelector(state => state.session.user);
  // console.log(sessionUser.id);

  useEffect(() => {
    const errors = [];
    if (answer.length > 1000) errors.push("Description cannot exceed 1000 characters.");
    if (answer.length < 5) errors.push("Description must exceed 5 characters.")

    setValidationErrors(errors);
  }, [answer]);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      history.push(`/questions/${createdAnswer.questionId}`)
      hideForm()
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
        <label htmlFor="answer">Answer:</label>
        <textarea
          id="answer"
          name="answer"
          onChange={e => setAnswer(e.target.value)}
          value={answer}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={!!validationErrors.length}
      >
        Submit new answer
      </button>
      <button onClick={() => hideForm()}>
        Cancel
      </button>
    </form>
  );
}

export default CreateAnswer;
