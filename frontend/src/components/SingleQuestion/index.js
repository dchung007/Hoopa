import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { thunkDeleteQuestion, thunkGetQuestions } from "../../store/questions";
import EditQuestion from "../EditQuestion";

const SingleQuestion = () => {
  const [showForm, setShowForm] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(id);
  const history = useHistory();

  const questions = useSelector(state => {
    return state.allQuestions;
  });
  const question = questions[id];
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(thunkGetQuestions())
  }, [dispatch])


  const onDelete = async () => {
    await dispatch(thunkDeleteQuestion(id));
    // const reloaded = await dispatch(thunkGetQuestions());
    await history.push('/questions');

  }

  return (
    question ?
      <div>
        <h1>{question.title}</h1>
        <h2>{question.description}</h2>
        {
          +sessionUser?.id === question.ownerId &&
          (
            <div>
              <button onClick={() => setShowForm(true)}>Edit Question</button>
              {
                showForm &&
                <EditQuestion question={question} hideForm={{ showForm, setShowForm }} />
              }
              <button onClick={() => onDelete()}>Delete Question</button>
            </div>
          )
        }

      </div >
      :
      <div>Loading...</div>

  );
}

export default SingleQuestion;
