import { Schema, model } from 'mongoose'

const listSchema = Schema({
    title: { type: String, required: true, unique: true },
    type: { type: String, },
    genre: { type: String },
    content: { type: Array },
}, { timestamps: true })

const listModel = model('List', listSchema)
export default listModel