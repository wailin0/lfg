import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import postReducer from './reducers/community/PostReducer'
import commentReducer from './reducers/community/CommentReducer'
import groupReducer from './reducers/community/GroupReducer'
import userReducer from './reducers/community/UserReducer'

const reducer = combineReducers({
    posts: postReducer,
    comments: commentReducer,
    groups: groupReducer,
    user: userReducer

})

export default createStore(
    reducer, composeWithDevTools(
    applyMiddleware(thunk)
))