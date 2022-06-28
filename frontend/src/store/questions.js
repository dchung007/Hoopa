import { csrfFetch } from "./csrf";

const LOAD_QUESTIONS = 'questions/LOAD_QUESTIONS';
const ADD_QUESTION = 'questions/ADD_QUESTIONS';
const EDIT_QUESTION = 'questions/EDIT_QUESTION';
const REMOVE_QUESTION = 'questions/REMOVE_QUESTION';

const loadQuestions = (questions) => ({
  type: LOAD_QUESTIONS,
  questions
});

const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question
});

const editQuestion = (question) => ({
  type: EDIT_QUESTION,
  question
});

const removeQuestion = (question) => ({
  type: REMOVE_QUESTION,
  question
});

export const getQuestions = () => async (dispatch) => {
  const response = await csrfFetch(`/api/questions`);

  if (response.ok) {
    const questions = await response.json();
    // console.log(questions);
    dispatch(loadQuestions(questions));
  }
}

export const createQuestion = (question) => async (dispatch) => {
  const response = await csrfFetch(`/api/questions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify(question)
  })
  // console.log(response.ok)
  if (response.ok) {
    // console.log('response iss valid----------------')
    const newQuestion = await response.json();
    dispatch(addQuestion(newQuestion));
    // console.log(newQuestion)
    return newQuestion;
  }
}

// export const updateQuestion = (question) => async (dispatch) => {
//   const response = await csrfFetch(`/api/questions/id`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/JSON'
//     },
//     body: JSON.stringify(question)
//   })

//   if (response.ok) {
//     const fixedQuestion = await response.json();
//     dispatch(editQuestion(fixedQuestion));
//     return fixedQuestion;
//   }
// }


const initialState = {};

const questionsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_QUESTIONS:
      newState = { ...state };
      action.questions.forEach(question => {
        newState[question.id] = question;
      });
      return newState;
    case ADD_QUESTION:
      newState = { ...state };
      newState[action.question.id] = action.question;
      return newState;
    default:
      return state;
  }
}






export default questionsReducer;
