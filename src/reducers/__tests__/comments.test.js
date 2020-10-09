import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

test('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['New Comment']);
});

test('handles actions with unknown type', () => {
  const newState = commentsReducer([], {});

  expect(newState).toEqual([]);
});