import { csrfFetch } from "./csrf";

const LOAD_QUESTIONS = 'questions/LOAD_QUESTIONS';
const ADD_QUESTION = 'questions/ADD_QUESTION';
// const EDIT_QUESTION = 'questions/EDIT_QUESTION';
const REMOVE_QUESTION = 'questions/REMOVE_QUESTION';

const actionLoadQuestions = (questions) => ({
  type: LOAD_QUESTIONS,
  questions
});

const actionAddQuestion = (question) => ({
  type: ADD_QUESTION,
  question
});

// const acrionEditQuestion = (question) => ({
//   type: EDIT_QUESTION,
//   question
// });

const actionRemoveQuestion = (questionId) => ({
  type: REMOVE_QUESTION,
  questionId
});

export const thunkGetSomeQuestions = () => async (dispatch) => {
  const response = await csrfFetch(`/api`);

  if (response.ok) {
    const questions = await response.json();
    // console.log(questions);
    dispatch(actionLoadQuestions(questions));
  }
}


export const thunkGetQuestions = () => async (dispatch) => {
  const response = await csrfFetch(`/api/questions`);

  if (response.ok) {
    const questions = await response.json();
    // console.log(questions);
    dispatch(actionLoadQuestions(questions));
  }
}

export const thunkCreateQuestion = (question) => async (dispatch) => {
  const {ownerId, title, description, image} = question;
  const formData = new FormData();
  formData.append("ownerId", ownerId);
  formData.append("title", title);
  formData.append("description", description);
  if (image) formData.append("image", image);
  const response = await csrfFetch(`/api/questions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    body: formData
  })
  // console.log(response.ok)
  if (response.ok) {
    // console.log('response iss valid----------------')
    const newQuestion = await response.json();
    dispatch(actionAddQuestion(newQuestion));
    // console.log(newQuestion)
    return newQuestion;
  }
}

export const thunkUpdateQuestion = (question) => async (dispatch) => {
  const response = await csrfFetch(`/api/questions/${question.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify(question)
  })

  if (response.ok) {
    // console.log("update please???????")
    const fixedQuestion = await response.json();
    dispatch(actionAddQuestion(fixedQuestion));
    return fixedQuestion;
  }
}

export const thunkDeleteQuestion = (question) => async (dispatch) => {
  const response = await csrfFetch(`/api/questions/${question.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify(question)
  },
  );
  if (response.ok) {
    const { id: deletedQuestionId } = await response.json();
    dispatch(actionRemoveQuestion(deletedQuestionId));
    return deletedQuestionId;
  }
}

const initialState = {};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_QUESTIONS:
      //const newState1 = { ...state };
      const newState1 = {};
      action.questions.forEach(question => {
        newState1[question.id] = question;
      });
      return newState1;
    case ADD_QUESTION:
      const newState2 = { ...state };
      newState2[action.question.id] = action.question;
      return newState2;
    case REMOVE_QUESTION:
      const newState3 = { ...state };
      delete newState3[action.questionId];
      return newState3;
    default:
      return state;
  }
}






export default questionsReducer;
