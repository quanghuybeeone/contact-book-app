import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';
import searchReducer from './searchReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  search: searchReducer,
  theme: themeReducer,
});

export default rootReducer;