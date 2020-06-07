import produce from 'immer';
import * as COUNTER_TYPES from '../../types/counterTypes';

const INITIAL_STATE = {
  count: 0,
}

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COUNTER_TYPES.INCREMENT:
      return produce(state, draft => {
        draft.count = state.count + 1;
      })
    case COUNTER_TYPES.DECREMENT:
      return produce(state, draft => {
        draft.count = state.count - 1;
      })
    case COUNTER_TYPES.RESET:
      return produce(state, draft => {
        draft.count = INITIAL_STATE.count;
      })
    default:
      return state;
  }
}

export default counterReducer;