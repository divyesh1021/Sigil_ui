import { createSlice } from "@reduxjs/toolkit";
interface State {
  theme: string;
  // userDetails: {
  //   isChanged: boolean,
  // }
}

const initialState: State = {
  
  theme: "light",
};
export const QuestionAndAnswerSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
  
    SetTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});


// Action creators are generated for each case reducer function
export const {

  SetTheme
  
} = QuestionAndAnswerSlice.actions;

export default QuestionAndAnswerSlice.reducer;
