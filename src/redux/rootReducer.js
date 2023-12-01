import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  search: searchReducer,
});

export default rootReducer;