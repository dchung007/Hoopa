import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetSomeQuestions } from "../../store/questions";
import { NavLink } from "react-router-dom";

import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();

  const questions = useSelector(state => {
    return state.allQuestions;
  });

  // console.log('--------------', questions, '-----------')

  useEffect(() => {
    dispatch(thunkGetSomeQuestions());
  }, [dispatch]);

  return (
    <div className="body-container">
      <h1>Questions List</h1>
      <div className="questions-list">
        {Object.values(questions).map((question) => {
          return (
            <div key={question.id} className="question-info">
              <NavLink to={`/questions/${question.id}`}>
                <div>
                  <div>
                    {question.title}
                  </div>
                  <div>
                    {question.description}
                  </div>
                </div>
              </NavLink>
            </div>
          )
        })}
      </div>
      <div id="link-all-questions">
        <NavLink to="/questions">All Questions</NavLink>
      </div>
    </div>
  );
  // return (
  //   <>
  //     <h1>whats up</h1>
  //     <NavLink to="/questions">All Questions</NavLink>
  //   </>

  // )
}

export default HomePage;
