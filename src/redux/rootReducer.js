import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices

import notesReducer from "./slices/notes";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  notes: notesReducer,
});

export { rootPersistConfig, rootReducer };
