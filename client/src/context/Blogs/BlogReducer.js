import { GET_EVERY_BLOG, GET_BLOG } from '../types'

const BlogReducer = (state, action) => {
    switch (action.type) {
        case GET_EVERY_BLOG:
            return ({
                ...state,
                blogs: action.payload
            })
        case GET_BLOG:
            return ({
                ...state,
                blog: action.payload
            })
        default:
            return state
    }
}

export default BlogReducer