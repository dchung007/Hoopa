import { csrfFetch } from "./csrf";

// constants
const LOAD_ANSWERS = 'answers/LOAD_ANSWERS';
const ADD_ANSWER = 'answers/ADD_ANSWER';
// const EDIT_ANSWER = 'answers/EDIT_ANSWER';
const REMOVE_ANSWER = 'answers/REMOVE_ANSWER';

const actionLoadAnswers = (answers) => ({
  type: LOAD_ANSWERS,
  answers
})

const actionAddAnswer = (answer) => ({
  type: ADD_ANSWER,
  answer
})

// const actionEditAnswer = (answers) => ({
//   type: EDIT_ANSWER,
//   answers
// })

const actionRemoveAnswer = (answerId) => ({
  type: REMOVE_ANSWER,
  answerId
})

// thunk action creators
export const thunkGetAnswers = (questionId) => async (dispatch) => {
  const response = await csrfFetch(`/api/answers/${questionId}`);

  if (response.ok) {
    const answers = await response.json();
    // console.log(answers);
    dispatch(actionLoadAnswers(answers));
  }
}

export const thunkCreateAnswer = (answer) => async (dispatch) => {
  const response = await csrfFetch(`/api/answers/${answer.questionId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify(answer)
  })
  // console.log(response.ok)
  if (response.ok) {
    // console.log('response iss valid----------------')
    const newAnswer = await response.json();
    dispatch(actionAddAnswer(newAnswer));
    // console.log(newAnswer)
    return newAnswer;
  }
}

// export const thunkUpdateQuestion = (answer) => async (dispatch) => {
//   const response = await csrfFetch(`/api/questions/${answer.questionid}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/JSON'
//     },
//     body: JSON.stringify(answer)
//   })

//   if (response.ok) {
//     console.log("update answer please???????")
//     const fixedAnswer = await response.json();
//     dispatch(actionAddAnswer(fixedAnswer));
//     return fixedAnswer;
//   }
// }

export const thunkDeleteAnswer = (answer) => async (dispatch) => {
  // console.log(answer)
  // console.log(answer.id)
  const response = await csrfFetch(`/api/answers/${answer.answer.questionId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify(answer)
  });
  if (response.ok) {
    // const { deletedId: deletedAnswerId } = await response.json();
    const deletedAnswerId = await response.json();
    // console.log(deletedAnswerId)
    dispatch(actionRemoveAnswer(deletedAnswerId));
    return deletedAnswerId;
  }
}


const initialState = {};

const answersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ANSWERS:
      //const newState1 = { ...state };
      const newState1 = {};
      action.answers.forEach(answer => {
        newState1[answer.id] = answer;
      });
      return newState1;
    case ADD_ANSWER:
      const newState2 = { ...state };
      newState2[action.answer.id] = action.answer;
      return newState2;
    case REMOVE_ANSWER:
      const newState3 = { ...state };
      delete newState3[action.answerId];
      return newState3;
    default:
      return state;
  }
}

export default answersReducer;
