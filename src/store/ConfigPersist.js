import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import formSlice from "./form";

const persistConfig = {
  key: "users",
  storage,
};
const persistedFormSlice = persistReducer(persistConfig, formSlice);

const store = configureStore({
  reducer: {
    formSlice: persistedFormSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;
