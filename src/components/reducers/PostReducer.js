const initState = []

const PostReducer = (state, action) => {
    switch (action) {
        case 'ADD_POST':
            return null
        case 'DELETE_POST':
            return null
        default:
            return initState
    }
}

export default PostReducer