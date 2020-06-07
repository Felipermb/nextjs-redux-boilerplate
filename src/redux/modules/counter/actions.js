import * as COUNTER_TYPES from '../../types/counterTypes';

export function increment() {
  return { type: COUNTER_TYPES.INCREMENT }
}

export function decrement() {
  return { type: COUNTER_TYPES.DECREMENT }
}

export function reset() {
  return { type: COUNTER_TYPES.RESET }
}