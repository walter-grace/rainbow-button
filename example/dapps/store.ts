import { createStore } from 'redux'

const SET_SESSION = 'SET_SESSION';
const SET_CLIENT = 'SET_CLIENT';
const SET_CONNECTOR = 'SET_CONNECTOR';

export const setPairings = (pairings: string[]) => ({
    type: SET_SESSION,
    payload: pairings
  })

const INITIAL_STATE = {
  session: undefined,
  client: undefined,
  connector: undefined
};
  
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SESSION:
      return { ...state, session: action.payload };
    case SET_CLIENT:
      return { ...state, client: action.payload };
      case SET_CONNECTOR:
        return { ...state, connector: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer) 

  