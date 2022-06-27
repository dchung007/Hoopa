import { csrfFetch } from "./csrf";

const LOAD_QUESTIONS = 'questions/LOAD_QUESTIONS';
const ADD_QUESTION = 'questions/ADD_QUESTIONS';
const EDIT_QUESTION = 'questions/EDIT_QUESTION';
const REMOVE_QUESTION = 'questions/REMOVE_QUESTION';

const loadQuestions = (questions) => ({
  type: LOAD_QUESTIONS,
  questions
});

const createQuestion = (question) => ({
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

const initialState = { allQuestions: {} }

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_QUESTIONS:
      const newState = { ...state, allQuestions: { ...state.allQuestions } };
      action.questions.forEach(question => {
        newState.allQuestions[question.id] = question;
      });
      return newState;
    default:
      return state;
  }
}






export default questionsReducer;
