import produce from 'immer';
import * as USER_DATA_TYPES from '../../types/userDataTypes';

const INITIAL_STATE = {
  error: false,
  placeholderData: null,
}

function userDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_DATA_TYPES.FAILURE:
      return produce(state, draft => {
        draft.error = action.error;
      })

    case USER_DATA_TYPES.LOAD_DATA_SUCCESS:
      return produce(state, draft => {
        draft.placeholderData = action.data;
      })

    default:
      return state;
  }
}

export default userDataReducer;