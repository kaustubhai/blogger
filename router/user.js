const express = require('express')
const Router = express.Router()
const auth = require('../middleware/auth')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

// @Route: GET/api/user
// @Desc: LoadUser from the jwt token in x-auth-token header

Router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Internal Server Error"})
    }
})

// @Route: POST/api/user/login
// @Desc: Take email, password, match in database, assign jwt

Router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user)
        return res.status(400).json({msg: "No User Found. You need to register first"})
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch)
        return res.status(400).json({ msg: "Invalid Credentials" })
    
    const payload = {
        user: {
            id: user.id,
            username: user.username
        }
    }

    jwt.sign(payload, 'kaustubh229', {
        expiresIn: 3600
    }, (err, token) => {
            if (err)
                throw err
            
            res.json({token})
    })
})

// @Route: POST/api/user/register
// @Desc: Take name, username, email, password, store in database, assign jwt

Router.post('/register', async (req, res) => {

        const { name, username, email, password } = req.body;
        
        try {
            
            let user = await User.findOne({ email })
            if (user)
                return res.status(400).json({ msg: 'User with same email already exist' })
            
            user = await User.findOne({ username })
            if (user)
                return res.status(400).json({ msg: 'Choose different username. This one is already taken' })
            
            if (!(name.trim().indexOf(' ') > 0))
                return res.status(400).json({ msg: "Please Enter your full name"})
            
            user = new User({
                name, username, email, password
            }) 
            
            user.password = await bcrypt.hash(user.password, 8);
            await user.save()
            
            const payload = {
                user: {
                    id: user.id,
                    username: user.username
                }
            }

            jwt.sign(payload, 'kaustubh229', {
                expiresIn: 3600
            }, (err, token) => {
                    if (err)
                        throw err
                    
                    res.json({token})
            })

            console.log(req.user)

        }
        catch (e) {
            console.log(e)
            res.status(500).json({ msg: "Internal Server Error"})
        }
})

module.exports = Router