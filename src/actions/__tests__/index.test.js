import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

let action;

describe('saveComment', () => {
  beforeEach(() => {
    action = saveComment('New Comment');
  })

  test('has the correct type', () => {    
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  
  test('it has the correct payload', () => {    
    expect(action.payload).toEqual('New Comment');
  });
})