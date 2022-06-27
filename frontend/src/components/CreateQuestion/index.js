import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




const CreateQuestion = () => {
  const dispatch = useDispatch();


  const onSubmit = async (e) => {
    e.preventDefault();

    const payload = {};
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <textarea
          id="title"
          name="title"
          onChange={e => e}
          value={title}
        ></textarea>
      </div>
      <div>
        <label htmlFor="description">Title:</label>
        <textarea
          id="description"
          name="description"
          onChange={e => e}
          value={description}
        ></textarea>
      </div>
    </form>
  );

}

export default CreateQuestion;
