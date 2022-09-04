import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";
import SearchSlice from "./SearchSlice";

export const store = configureStore({
  reducer: {
    search:SearchSlice,
    language: languageSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
