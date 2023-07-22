import { Schema, model } from 'mongoose'


const movieSchema = Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, },
    thumbnail: { type: String, },
    trailer: { type: String, },
    video: { type: String, },
    year: { type: String },
    limit: { type: String },
    genre: { type: String },
    isSeries: { type: Boolean },
}, { timestamps: true })

const movieModel = model('Movie', movieSchema)
export default movieModel