import { GET_EVERY_BLOG, GET_BLOG, POST_BLOG, REMOVE_ALERT, USER_BLOG, LOAD_BLOG, UPDATE_BLOG, DELETE_BLOG } from '../types'

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
                blog: action.payload,
                alert: "Blog Posted Successfully"
            })
        case UPDATE_BLOG:
            return ({
                ...state,
                loading: false,
                blog: action.payload,
                alert: "Blog Updated Successfully",
            })
        case USER_BLOG:
            return ({
                ...state,
                blogs: action.payload
            })
        case LOAD_BLOG:
            return ({
                ...state,
                blog: action.payload,
                loading: false
            })
        case DELETE_BLOG:
            return ({
                ...state,
                blog: action.payload,
                blogs: state.blogs.filter((blog) => blog._id !== action.payload._id),
                loading: false
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