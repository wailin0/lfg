import postService from '../../services/community/posts'


const PostReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_POST':
            return action.data
        case 'GET_GROUP_POST':
            return action.data
        case 'CREATE_POST':
            return [...state, action.data]
        case 'CREATE_MEDIA_POST':
            return [...state, action.data]
        case 'UPDATE_POST':
            const updatedPost = action.data
            return state.map(post => post.postId === updatedPost.postId ? updatedPost : post)
        case 'DELETE_POST':
            return state.filter(post => post.postId !== action.postId)
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

export const createAMediaPost = (groupId, mediaPost) => {
    return async dispatch => {
        const data = await postService.createNewMediaPost(groupId, mediaPost)
        dispatch({
            type: 'CREATE_MEDIA_POST',
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