import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../store/questions";

const SingleQuestion = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(id);

  const questions = useSelector(state => {
    return state.allQuestions;
  });

  const question = questions[id];

  useEffect(()=> {
    dispatch(getQuestions())
  },[dispatch])

  return (
    <div>
      <h1>{question?.title}</h1>
      <h2>{question?.description}</h2>
      <ol>
        <li>Answers for this specific question</li>
      </ol>
      <h3>answers will be right here</h3>
    </div>
  );
}

export default SingleQuestion;
