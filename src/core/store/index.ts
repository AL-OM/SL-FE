import { applyMiddleware, legacy_createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import middleware from "./middleware";
import { PERSIST_CONFIG } from "./persist";
import { rootReducer } from "./reducer";

const bindMiddleware = (middleware: any[]) => {
  // if (process.env.NODE_ENV !== "production") {
  //   return composeWithDevTools(applyMiddleware(...middleware));
  // }
  // return applyMiddleware(...middleware);
  return applyMiddleware(...middleware);
};
const abbb = 'fdsfads'
const persistedReducer = persistReducer(PERSIST_CONFIG, rootReducer);

export type AppState = ReturnType<typeof rootReducer>;
export const store = legacy_createStore(
  persistedReducer,
  bindMiddleware([...middleware])
);
export const persistor = persistStore(store);
