import { combineReducers } from 'redux';
import Booksreducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: Booksreducer,
  activeBook: ActiveBook
});

export default rootReducer;
