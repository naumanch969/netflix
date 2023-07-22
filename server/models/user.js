import { Schema, model } from 'mongoose'


const userSchema = Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: '' },
    isAdmin: { type: Boolean, default: false }
}, { timestamps: true })

const userModel = model('User', userSchema)
export default userModel