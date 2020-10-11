import { 
  SAVE_COMMENT, 
  FETCH_COMMENTS,
  CHANGE_AUTH
} from 'actions/types';
import Axios from 'axios';

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

export const fetchComments = () => {
  const response = Axios.get('http://jsonplaceholder.typicode.com/comments')

  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}

export const changeAuth = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}