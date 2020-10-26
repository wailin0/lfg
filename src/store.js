import { createStore, combineReducers,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import postReducer from './reducers/community/PostReducer'
import commentReducer from './reducers/community/CommentReducer'


const reducer = combineReducers({
    posts: postReducer,
    comments: commentReducer
})

export default createStore(
    reducer, composeWithDevTools(
    applyMiddleware(thunk)
))