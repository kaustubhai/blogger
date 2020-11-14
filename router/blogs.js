const express = require('express')
const Router = express.Router()
const auth = require('../middleware/auth')

const Blog = require('../models/blog')

// @Route: GET /api/blog
// @Desc: Read existing blogs of current user

Router.get('/', auth, async (req, res) => {
    
    try {
        const blogs = await Blog.find({ author: req.user.id })
        if (!blogs)
            return res.status(400).send("Please write a blog first")
        res.json(blogs)
    } catch (error) {
        console.log(error)
        res.json({ msg: "Internal Server Error"})
    }
})

// @Route: POST /api/blog
// @Desc: Write a new blog 

Router.post('/', auth, async (req, res) => {
    const { title, image, description } = req.body

    try {
        const blog = new Blog({ title, description, image, author: req.user.id })
        await blog.save()
        res.json(blog)
    } catch (error) {
        console.log(error)
        res.json({ msg: "Internal Server Error"})
    }
})

// @Route: PUT /api/blog/:id
// @Desc: Update an existing blog 

Router.put('/:id', auth, async (req, res) => {
    const { title, image, description } = req.body

    try {
        const blog = await Blog.findById(req.params.id)
        if (!blog)
            return res.status(400).send('Invalid Blog')
        const toUpdated = {
            title: title || blog.title,
            image: image || blog.image,
            description: description || blog.description
        }
        const updated = await Blog.findByIdAndUpdate(req.params.id, {$set: toUpdated}, {new: true})
        res.json(updated)
    } catch (error) {
        console.log(error)
        res.json({ msg: "Internal Server Error"})
    }
})

// @Route: DELETE /api/blog/:id
// @Desc: Delete an existing blog 

Router.delete('/:id', auth, async (req, res) => {
    try {
        const deleted = await Blog.findOneAndDelete(req.params.id)
        res.json(deleted)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Internal Server Error"})
    }
})

// @Route: GET /api/blog/dashboard
// @Desc: Fetch All of the blogs written by any user

Router.get('/dashboard', async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.json(blogs)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Internal Server Error"})
    }
})

module.exports = Router