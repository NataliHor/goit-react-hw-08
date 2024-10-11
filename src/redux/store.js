import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import filtersReduser from "./filters/slice";
import contactsReduser from "./contacts/slice";
import authReduser from "./auth/slice";

const persistConfig = {
  key: "jwt-token",
  storage,
  whitelist: ["token"],
};

const persistedAuth = persistReducer(persistConfig, authReduser);

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReduser,
    auth: persistedAuth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
