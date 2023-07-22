import jwt from 'jsonwebtoken'
import { error } from '../utils/error.js'

export const verifyToken = async (req, res, next) => {
    try {

        const token = req.headers.authtoken
        if (!token) return res.status(400).json({ message: 'You are unauthenticated ' })

        const decodedUser = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decodedUser

        next()
    }
    catch (err) {
        next(error(500, `${err.message} - verifyToken`))
    }
}

export const verifyUser = (req, res, next) => {
    try {

        verifyToken(req, res, () => {
            if (req.user._id == req.params.userId || req.user.isAdmin) {
                next()
            }
            else {
                next(error(401, 'You have no access to this route'))
            }
        })

    } catch (err) {
        next(error(500, `${err.message} - verifyUser`))
    }
}

export const verifyAdmin = (req, res, next) => {
    try {
        verifyToken(req, res, () => {
            if (req.user.isAdmin) {
                next()
            }
            else {
                next(error(401, 'Only admin can access this route'))
            }
        })
    } catch (err) {
        next(error(500, `${err.message} - verifyAdmin`))
    }
}