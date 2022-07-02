import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetQuestions } from "../../store/questions";
import { NavLink, Switch, Route } from "react-router-dom";
// import CreateQuestion from "../CreateQuestion";
import CreateQuestionModal from "../CreateQuestionModal";
import './QuestionsList.css';

const QuestionsList = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const questions = useSelector(state => {
    return state.allQuestions;
  });
  // console.log('--------------', questions, '-----------')

  useEffect(() => {
    dispatch(thunkGetQuestions());
  }, [dispatch]);

  return (
    <div className="body-container">
      <h1>Questions List</h1>
      <div>
        {Object.values(questions).map((question) => {
          return (
            <div key={question.id}>
              <NavLink to={`/questions/${question.id}`}>
                <div>
                  <div>
                    {question.User?.username}
                  </div>
                  <div>
                    {question.title}
                  </div>
                  <div>
                    {question.description}
                  </div>
                  <div>
                    ___________________________________________
                  </div>
                </div>
              </NavLink>
            </div>
          )
        })}
      </div>
      {
        sessionUser?.id && (
          <div>
            <CreateQuestionModal />
          </div>
        )
      }
    </div >
  );
}

export default QuestionsList;
