import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { taskReducer } from "./task/task.reducer";
import { bgReducer } from "./bgImage/bg.reducer";
import { importantReducer } from "./important/important.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    task: taskReducer,
    bg: bgReducer,
    important: importantReducer,
});