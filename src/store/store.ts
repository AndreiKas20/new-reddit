import {applyMiddleware, combineReducers, createStore} from "redux";import {composeWithDevTools} from "redux-devtools-extension";import thunk from "redux-thunk";import {getDataUserReducer} from "./getDataUserReducer";import {getDataArr} from "./getArrPostsReducer";import {getCommentsCardReducer} from "./getCommentsCardReducer";import {getSearchArrReducer} from "./getSearchArrReducer";import {getTokenReducer} from "./getTokenReducer";const rootReducer = combineReducers({    getDataUserReducer,    getDataArr,    getCommentsCardReducer,    getSearchArrReducer,    getTokenReducer})export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))