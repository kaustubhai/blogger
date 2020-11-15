import { GET_EVERY_BLOG } from '../types'

const BlogReducer = (state, action) => {
    switch (action.type) {
        case GET_EVERY_BLOG:
            return ({
                ...state,
                blogs: action.payload
            })
        default:
            return state
    }
}

export default BlogReducer