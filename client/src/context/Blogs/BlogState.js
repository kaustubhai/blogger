import React, { useReducer } from 'react'
import { GET_EVERY_BLOG, GET_BLOG, POST_BLOG, REMOVE_ALERT, USER_BLOG, LOAD_BLOG, UPDATE_BLOG, DELETE_BLOG } from '../types'
import BlogContext from './BlogContext'
import BlogReducer from './BlogReducer'

import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'

const BlogState = props => {

    const initialState = {
        blogs: null,
        blog: null,
        current: null,
        loading: true,
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
                const res = await axios.post('/api/blog', formData, config)
                dispatch({ type: POST_BLOG, payload: res.data })
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const getUserBlogs = async () => {
        try {
            const res = await axios.get('/api/blog');
            console.log(res.data)
            dispatch({ type: USER_BLOG, payload: res.data})
        } catch (error) {
            console.log(error)
        }
    }

    const updateBlog = async (formData, id) => {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        try {
                const res = await axios.put(`/api/blog/${id}`, formData, config)
                dispatch({ type: UPDATE_BLOG, payload: res.data })
        }
        catch (error) {
            console.log(error)
        }
    }

    const loadBlog = async (id) => {
        try {
            const res = await axios.put(`/api/blog/${id}`)
            dispatch({ type: LOAD_BLOG, payload: res.data })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteBlog = async (id) => {
        console.log(id)
        try {
            const res = await axios.delete(`/api/blog/${id}`)
            dispatch({ type: DELETE_BLOG, payload: res.data })
        } catch (error) {
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
            loading: state.loading,
            getBlogs,
            getOneBlog,
            loadBlog,
            updateBlog,
            addNewBlog,
            getUserBlogs,
            deleteBlog,
            removeBlogAlert
        }}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState
