import commentService from '../../services/community/comments'


const CommentReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_POST_COMMENT':
            return action.data
        case 'CREATE_COMMENT':
            return [...state, action.data]
        case 'DELETE_COMMENT':
            return state.filter(post => post.id !== action.postId)
        default:
            return state
    }
}

export const getCommentFromAPost = (postId) => {
    return async dispatch => {
        const data = await commentService.getCommentFromPost(postId)
        dispatch({
            type: 'GET_POST_COMMENT',
            data
        })
    }
}

export const createAComment = (postId, comment) => {
    return async dispatch => {
        const data = await commentService.createNewComment(postId, comment)
        dispatch({
            type: 'CREATE_COMMENT',
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