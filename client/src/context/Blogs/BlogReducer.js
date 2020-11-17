import { GET_EVERY_BLOG, GET_BLOG, POST_BLOG, REMOVE_ALERT } from '../types'

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
        case POST_BLOG:
            return ({
                ...state,
                blog: action.payload.data,
                alert: "Blog Posted Successfully"
            })
        case REMOVE_ALERT:
            return ({
                ...state,
                alert: null,
            })
        default:
            return state
    }
}

export default BlogReducer