import groupService from '../../services/community/groups'

const GroupReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_USER_GROUP':
            return action.data
        case 'CREATE_GROUP':
            return [...state, action.data]
        case 'UPDATE_GROUP':
            const updatedGroup = action.data
            return state.map(group => group.id === updatedGroup.id ? updatedGroup : group)
        case 'DELETE_GROUP':
            return state.filter(group => group.id !== action.groupId)
        default:
            return state
    }
}

export const getUserGroup = () => {
    return async dispatch => {
        const data = await groupService.getUserGroup()
        dispatch({
            type: 'GET_USER_GROUP',
            data
        })
    }
}

export const createAGroup = (group) => {
    return async dispatch => {
        const data = await groupService.createNewGroup(group)
        dispatch({
            type: 'CREATE_GROUP',
            data
        })
    }
}


export const updateAGroup = (group) => {
    return async dispatch => {
        const data = await groupService.updateGroup(group)
        dispatch({
            type: 'UPDATE_GROUP',
            data
        })
    }
}

export const deleteAGroup = (groupId) => {
    return async dispatch => {
        await groupService.deleteGroup(groupId)
        dispatch({
            type: 'DELETE_GROUP',
            groupId
        })
    }
}


export default GroupReducer