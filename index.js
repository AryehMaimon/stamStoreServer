const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express()

const db = require('./db.js')
db.connect()


const port = process.env.PORT ;



app.use(cors())
app.use(express.json())



const authRoutes = require('./routes/authRouter.js')
const userRouter = require('./routes/user.router.js')
const storeRouter = require('./routes/store.router.js')

app.use('/auth', authRoutes)
app.use('/user', userRouter)
app.use('/store', storeRouter)

app.listen(port,()=> console.log("***server is up on port", port, "***"))
