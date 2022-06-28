import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetQuestions } from "../../store/questions";
import { NavLink, Switch, Route } from "react-router-dom";
import CreateQuestion from "../CreateQuestion";
import './QuestionsList.css';

const QuestionsList = () => {
  const dispatch = useDispatch();
  const questions = useSelector(state => {
    return state.allQuestions;
  });
  // console.log('--------------', questions, '-----------')

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(thunkGetQuestions());
  }, [dispatch]);

  return (
    <div>
      <h1>Questions List</h1>
      <div>
        {Object.values(questions).map((question) => {
          return (
            <div key={question.id}>
              <NavLink to={`/questions/${question.id}`}>
                <div>
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
      <div>
        <button onClick={() => setShowForm(true)}>Create new Question</button>
      </div>
      {
        showForm &&
        <div>
          <CreateQuestion hideForm={() => setShowForm(false)} />
        </div>
      }
    </div >
  );
}

export default QuestionsList;
