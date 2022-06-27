import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { createQuestion } from '../../store/questions';



import './CreateQuestion.css';



const CreateQuestion = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const sessionUser = useSelector(state => state.session.user);
  // console.log(sessionUser.id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ownerId: sessionUser.id,
      title,
      description
    };
    // console.log('helloooo');
    let createdQuestion = await dispatch(createQuestion(payload));
    // console.log(createdQuestion);
    if (createdQuestion) {
      // console.log('HELPPPPPP----------------')
      history.push(`/questions/${createdQuestion.id}`);
    }
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
      <button type="submit">Create new question</button>
    </form>
  );

}

export default CreateQuestion;
