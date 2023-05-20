import { combineReducers } from "redux";
//вытаскиваем редюсер о пользователях
import userReducer from './user/userReducer';

//фиксируем редюсер о пользователях в ombineReducers
const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer;