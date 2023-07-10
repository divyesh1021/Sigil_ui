// import changeMod from "../reducer/Changemode";
// import { combineReducers } from "redux";
// const rootReducer=combineReducers({changeMod});
// export default rootReducer;



import { combineReducers } from 'redux';
import darkModeReducer from '../reducer/Changemode';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
});

export default rootReducer;