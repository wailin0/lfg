import userService from '../../services/community/user'


const CommentReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_AUTHED_USER':
            return action.data
        case 'CREATE_USER':
            return [...state, action.data]
        case 'UPDATE_USER':
            return null
        case 'DELETE_USER':
            return state.filter(post => post.id !== action.postId)
        default:
            return state
    }
}

export const getLoggedInUser = () => {
    return async dispatch => {
        const data = await userService.getAuthedUser();
        dispatch({
            type: 'GET_AUTHED_USER',
            data
        })
    }
}

export const registerUser = (user) => {
    return async dispatch => {
        const data = await userService.createUser(user)
        dispatch({
            type: 'CREATE_USER',
            data
        })
    }
}

export const deleteAComment = (commentId) => {
    return async dispatch => {
        await commentService.deleteComment(commentId)
        dispatch({
            type: 'DELETE_COMMENT',
            commentId
        })
    }
}


export default CommentReducer