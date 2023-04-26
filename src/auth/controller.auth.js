const {Router} = require('express')
const passport = require('passport')
const User = require('../dao/models/Users.model')
const { isValidPassword, createHash } = require('../utils/cryptPassword')
const { generateToken } = require('../utils/jwt.utils')


const router = Router()

router.post('/login', (res,req)=>{
 const {email, password} = req.body
 const token = generateToken(email)

 res
 .cookie('authToken', token, {maxAge: 6000, httpOnly: true})
 .json({message: 'Sesion init'})

})

router.post('/', passport.authenticate('login', {failureRedirect:'/failLogin'}),async(res, req)=>{
    try {
        if(!req.user) return res.status(400).json({error:'Credentials Invalids'})

        req.session.user={
            fist_name: req.user.fist_name,
            last_name: req.user.last_name,
            age: req.user.age,
            email: req.user.email
        }
        res.json({message:req.user})

    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
})


router.get('/github', passport.authenticate('github',{scope:['user:email']}),async(res,req)=>{})

router.get('/githubcallback', passport.authenticate('github', {failureRedirect:'/login'}),async (req,res)=>{
    req.session.user = req.user
    req.redidect('/')
})


router.get('/google', passport.authenticate('google',{scope:['profile']}),async (req, res)=>{})

router.get('/google/callback', passport.authenticate('google',{failureRedirect:'/login'},async(req,res)=>{
    req.session.user = req.user
    req.redirect('/')
  }))


  router.get('/logout', (req, res)=>{
    req.session.destroy(error=>{
        if(error) return res.json({error})
        res.redirect('/login')
    })
  })

router.patch('/forgotPassword', async (req,res)=>{
    try {
        const {email, password} = req.body
        const passwordEncrypter = createHash(password)

        await User.updateOne({email},{password: passwordEncrypter})
        res.json({message: 'Password updated'})
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
})

module.exports= router