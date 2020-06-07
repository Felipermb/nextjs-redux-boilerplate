import { combineReducers } from 'redux';

// Reducers
import counterReducer from './counter/reducer';
import userDataReducer from './userData/reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userDataReducer,
});

export default rootReducer;
