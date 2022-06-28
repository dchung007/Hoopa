import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import { getQuestions } from "../../store/questions";



import "./EditQuestion.css";

const EditQuestion = ({ question }) => {
  const dispatch = useDispatch();
  // console.log(question)
  // const { id } = useParams();


  const [title, setTitle] = useState(question?.title);
  const [description, setDescription] = useState(question?.description);



  const sessionUser = useSelector(state => state.session.user);

  // useEffect(() => {
  //   dispatch(getQuestions())
  // }, [dispatch]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    // const payload = {
    //   ownerId: sessionUser.id,
    //   title,
    //   description
    // };
    // // console.log('helloooo');
    // let createdQuestion = await dispatch(createQuestion(payload));
    // // console.log(createdQuestion);
    // if (createdQuestion) {
    //   // console.log('HELPPPPPP----------------')
    //   history.push(`/questions/${createdQuestion.id}`);
    // }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <textarea
          id="title"
          name="title"
          onChange={e => setTitle(e.target.value)}
          value={title}
        ></textarea>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          onChange={e => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </div>
      <button type="submit">Submit edit</button>
    </form>
  );
}


export default EditQuestion;
