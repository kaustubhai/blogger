import React, { useReducer } from 'react'
import { GET_EVERY_BLOG, GET_BLOG } from '../types'
import BlogContext from './BlogContext'
import BlogReducer from './BlogReducer'
import axios from 'axios'

const BlogState = props => {

    const initialState = {
        blogs: null,
        blog: null,
        current: null,
        loading: false
    }

    const [state, dispatch] = useReducer(BlogReducer, initialState)

    const getBlogs = async () => {
        try {
            const res = await axios.get('/api/blog/dashboard')
            dispatch({
                type: GET_EVERY_BLOG,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getOneBlog = async (id) => {
        try {
            const res = await axios.get(`/api/blog/${id}`)
            dispatch({
                type: GET_BLOG,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <BlogContext.Provider value={{
            blogs: state.blogs,
            blog: state.blog,
            getBlogs,
            getOneBlog
        }}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState
