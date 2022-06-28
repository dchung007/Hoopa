import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../store/questions";
import { NavLink, Switch, Route } from "react-router-dom";
import CreateQuestion from "../CreateQuestion";
// import SingleQuestion from "../SingleQuestion";

import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();

  const questions = useSelector(state => {
    return state.allQuestions;
  });

  console.log('--------------', questions, '-----------')

  useEffect(() => {
    dispatch(getQuestions());
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
        <NavLink to="/questions">All Questions</NavLink>
      </div>
      <div>
        <CreateQuestion />
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