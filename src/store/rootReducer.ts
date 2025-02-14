import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"; 

import  todoSlices  from './modules/todo/todoSlices';
import  assessmentSlices  from "./modules/assessment/assessmentSlices";
import  modalSlices  from "./modules/modal/modalSlices";
import  userSlice  from "./modules/user/userSlice";
import  themeSlice  from "./modules/theme/themeSlice";
import  loadingSlice  from "./modules/Loading/loadingSlice";
import  paginationSlice  from "./modules/Pagination/paginationSlice";

const rootReducer = combineReducers({
    todos: todoSlices,
    assessment: assessmentSlices,
    modal: modalSlices,
    user: userSlice,
    theme: themeSlice,
    loading: loadingSlice,
    pagination: paginationSlice,
})

export const persistConfig  = persistReducer({
    key: 'students',
    storage
}, rootReducer)