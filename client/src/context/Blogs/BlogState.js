import React, { useReducer } from 'react'
import { GET_EVERY_BLOG, GET_BLOG, POST_BLOG, REMOVE_ALERT } from '../types'
import BlogContext from './BlogContext'
import BlogReducer from './BlogReducer'

import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'

const BlogState = props => {

    const initialState = {
        blogs: null,
        blog: null,
        current: null,
        loading: false,
        alert: null
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

    const addNewBlog = async (formData) => {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        try {
            if (localStorage.getItem('token')) {
                setAuthToken(localStorage.getItem('token'))
                const res = await axios.post('http://localhost:5000/api/blog', formData, config)
                console.log(res)
                dispatch({ type: POST_BLOG, payload: res })
            
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const removeBlogAlert = () => {
        dispatch({ type: REMOVE_ALERT })
    }

    return (
        <BlogContext.Provider value={{
            blogs: state.blogs,
            blog: state.blog,
            alert: state.alert,
            getBlogs,
            getOneBlog,
            addNewBlog,
            removeBlogAlert
        }}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState
