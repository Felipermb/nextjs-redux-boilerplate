import * as USER_DATA_TYPES from '../../types/userDataTypes';

export function failure(error) {
  return {
    type: USER_DATA_TYPES.FAILURE,
    error,
  }
}

export function loadData() {
  return { type: USER_DATA_TYPES.LOAD_DATA }
}

export function loadDataSuccess(data) {
  return {
    type: USER_DATA_TYPES.LOAD_DATA_SUCCESS,
    data,
  }
}