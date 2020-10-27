import postService from '../../services/community/posts'


const PostReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_POST':
            return action.data
        case 'GET_GROUP_POST':
            return action.data
        case 'CREATE_POST':
            return [...state, action.data]
        case 'UPDATE_POST':
            const updatedPost = action.data
            return state.map(post => post.id === updatedPost.id ? updatedPost : post)
        case 'DELETE_POST':
            return state.filter(post => post.id !== action.postId)
        default:
            return state
    }
}

export const getPosts = () => {
    return async dispatch => {
        const data = await postService.getAllPost()
        dispatch({
            type: 'GET_ALL_POST',
            data
        })
    }
}

export const getPostsFromAGroup = (groupId) => {
    return async dispatch => {
        const data = await postService.getPostFromGroup(groupId)
        dispatch({
            type: 'GET_GROUP_POST',
            data
        })
    }
}


export const createAPost = (groupId, post) => {
    return async dispatch => {
        const data = await postService.createNewPost(groupId, post)
        dispatch({
            type: 'CREATE_POST',
            data
        })
    }
}

export const updateAPost = (post) => {
    return async dispatch => {
        const data = await postService.updatePost(post)
        dispatch({
            type: 'UPDATE_POST',
            data
        })
    }
}


export const deleteAPost = (postId) => {
    return async dispatch => {
        await postService.deletePost(postId)
        dispatch({
            type: 'DELETE_POST',
            postId
        })
    }
}


export default PostReducer