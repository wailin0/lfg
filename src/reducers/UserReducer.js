import userService from '../services/user'

const initState = null

const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_AUTHED_USER':
            return action.data
        case 'CLEAR_AUTHED_USER':
            return null
        case 'CREATE_USER':
            return null
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

export const clearLoggedInUser = () => {
    return dispatch => {
        dispatch({ type: 'CLEAR_AUTHED_USER' })
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

export const deleteAComment = () => {
    return async dispatch => {
        await userService.deleteUser()
        dispatch({
            type: 'DELETE_USER'
        })
    }
}


export default UserReducer