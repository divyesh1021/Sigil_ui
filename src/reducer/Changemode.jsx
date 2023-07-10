// const initialState={
//     darkMode: true,
// }
// const changeMod=(state=initialState,action)=>
// {
//     switch(action.type)
//     {
//         case "DarkMode":return {
//             ...state,darkMode:state.darkMode,
//         };
//         case "LightMode":return state-1;
//         default: return state;  
//     }
// }

// export default changeMod;


import { TOGGLE_DARK_MODE } from '../actions/index';

const initialState = {
  darkMode: false,
};

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default darkModeReducer;