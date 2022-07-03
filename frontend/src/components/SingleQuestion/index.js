import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { thunkGetAnswers } from "../../store/answers";
import { thunkDeleteQuestion, thunkGetQuestions } from "../../store/questions";
import AnswersList from "../AnswersList";
// import EditQuestion from "../EditQuestion";
import EditQuestionModal from "../EditQuestionModal";
import './SingleQuestion.css'

const SingleQuestion = () => {
  // const [showForm, setShowForm] = useState();
  const dispatch = useDispatch();
  const { id: questionId } = useParams();
  // console.log(id);
  const history = useHistory();

  const questions = useSelector(state => {
    return state.allQuestions;
  });
  const question = questions[questionId];
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(thunkGetQuestions());
  }, [dispatch])


  const onDelete = async () => {
    await dispatch(thunkDeleteQuestion(question));
    // const reloaded = await dispatch(thunkGetQuestions());
    await history.push(`/questions`);

  }

  return (
    question ?
      <div className="body-container">
        <div className="question-info">
          <h1>{question.title}</h1>
          <h2>{question.description}</h2>
          <h3>{question.User?.username}</h3>
        </div>
        {
          +sessionUser?.id === question.ownerId &&
          (
            <div>
              <EditQuestionModal question={question} />
              <button className="form-button" onClick={() => onDelete()}>Delete Question</button>
            </div>
          )
        }
        <div>
          <AnswersList />
        </div>
      </div >
      :
      <div>Loading...</div>

  );
}

export default SingleQuestion;
