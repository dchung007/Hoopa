import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetAnswers } from "../../store/answers";
// const db = require("../../../../backend/db");
// const { Question, Answer } = db;

const AnswersList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const answers = useSelector(state => state.answers);
  // console.log(answers);
  const sessionUser = useSelector(state => state.session.user);
  // console.log(sessionUser);


  useEffect(() => {
    dispatch(thunkGetAnswers(id));
  }, [dispatch]);

  const getUser = (userId) => {

  }

  return (
    <div>
      <h2>Answers</h2>
      <div>
        {Object.values(answers).map((answer) => {
          return (
            <div>
              <div>
                {answer.User.username}
              </div>
              <div>
                {answer.answer}
              </div>
              <div>
                __________________________________________________________________________
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default AnswersList;
