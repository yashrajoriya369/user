import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { quizService } from "./quizService";

// List All Quizzes
export const listQuizzes = createAsyncThunk(
  "quiz/list",
  async (_, thunkAPI) => {
    try {
      return await quizService.getAllQuiz();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message || "Failed to fetch quizzes"
      );
    }
  }
);

// Get Quiz By ID
export const getQuizById = createAsyncThunk(
  "quiz/getById",
  async (id, thunkAPI) => {
    try {
      return await quizService.getAQuiz(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message || "Failed to fetch quiz"
      );
    }
  }
);

const initialState = {
  quizzes: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  selectedQuiz: null,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // List
      .addCase(listQuizzes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(listQuizzes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.quizzes = action.payload;
      })
      .addCase(listQuizzes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Get By ID
      .addCase(getQuizById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getQuizById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.selectedQuiz = action.payload;
      })
      .addCase(getQuizById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload || "Failed to get quiz";
      });
  },
});

export const { resetStatus } = quizSlice.actions;
export default quizSlice.reducer;
