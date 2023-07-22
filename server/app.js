import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import cors from 'cors'

import userRoutes from './routes/user.js'
import movieRoutes from './routes/movie.js'
import listRoutes from './routes/list.js'

dotenv.config()
const app = express()
const CONNECTION_URL = process.env.ATLAS_URL
const PORT = process.env.PORT || 5500

app.use(cors())
app.use(express.json())
app.use('/user', userRoutes)
app.use('/movie', movieRoutes)
app.use('/list', listRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || 'Something went wrong!'
    return res.status(500).json({ message, status, success: false, stack: err.stack })
})

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log('listening at port', PORT)))
    .catch((err) => console.log('error in connnecting with MongoDB = \n', err))