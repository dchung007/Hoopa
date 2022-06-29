import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { thunkDeleteAnswer, thunkGetAnswers } from "../../store/answers";

import CreateAnswer from "../CreateAnswer.js";
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
    console.log(answer)
    await dispatch(thunkDeleteAnswer(answer));
    // const reloaded = await dispatch(thunkGetQuestions());
    await dispatch(thunkGetAnswers(questionId));
    await history.push(`/questions/${questionId}`);

  }
  return (
    <div>
      <h2>Answers</h2>
      <div>
        {Object.values(answers).map((answer) => {
          return (
            <div key={answer.id}>
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
                    <div>
                      <button>Edit answer</button>
                    </div>
                    <div>
                      <button onClick={() => onDelete({ answer })}>Delete Answer</button>
                    </div>
                  </div>
                )
              }
              <div>
                __________________________________________________________________________
              </div>
            </div>
          )
        })}
      </div>
      {
        sessionUser?.id && (
          <div>
            <div>
              <button onClick={() => setShowForm(true)}>Create new Answer</button>
            </div>
            {
              showForm &&
              <div>
                <CreateAnswer hideForm={() => setShowForm(false)} />
              </div>
            }
          </div>
        )
      }
    </div >
  );
}

export default AnswersList;
