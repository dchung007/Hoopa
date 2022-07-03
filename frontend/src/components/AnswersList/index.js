import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { thunkDeleteAnswer, thunkGetAnswers } from "../../store/answers";

// import CreateAnswer from "../CreateAnswer/index.js";
import CreateAnswerModal from "../CreateAnswerModal";
import './AnswersList.css'
// const db = require("../../../../backend/db");
// const { Question, Answer } = db;

const AnswersList = () => {
  const { id: questionId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  const answers = useSelector(state => state.answers);
  // console.log(answers);
  const sessionUser = useSelector(state => state.session.user);
  // console.log(sessionUser);


  useEffect(() => {
    dispatch(thunkGetAnswers(questionId));
  }, [dispatch]);

  const onDelete = async (answer) => {
    // console.log(answer)
    await dispatch(thunkDeleteAnswer(answer));
    // const reloaded = await dispatch(thunkGetQuestions());
    // await dispatch(thunkGetAnswers(questionId));
    // await history.push(`/questions/${questionId}`);

  }
  return (
    answers ?
      <div className="body-container">
        <h2>Answers</h2>
        <div>
          {Object.values(answers).map((answer) => {
            return (
              <div key={answer.id} className="single-answer">
                <div>
                  {answer.User?.username}
                </div>
                <div>
                  {answer.answer}
                </div>
                {
                  +sessionUser?.id === answer.userId &&
                  (
                    <div>
                      <div className="delete-answer-button">
                        <button className="form-button" onClick={() => onDelete({ answer })}>Delete Answer</button>
                      </div>
                    </div>
                  )
                }
              </div>
            )
          })}
        </div>
        {
          sessionUser?.id && (
            <div>
              <CreateAnswerModal />
            </div>
          )
        }
      </div >
      :
      <div>Loading...</div>
  );
}

export default AnswersList;
