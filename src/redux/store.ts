import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required to handle non-serializable redux-persist actions
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
