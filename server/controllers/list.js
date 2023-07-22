import List from '../models/list.js'
import { error } from '../utils/error.js'

export const getLists = async (req, res, next) => {
    try {
        const { type, genre } = req.query

        let list = []

        if (type && genre)
            list = await List.aggregate([{ $match: { type, genre } }, { $sample: { size: 10 } },])
        else if (type)
            list = await List.aggregate([{ $match: { type } }, { $sample: { size: 10 } }])
        else if (genre)
            list = await List.aggregate([{ $match: { genre } }, { $sample: { size: 10 } },])
        else
            list = await List.aggregate([{ $sample: { size: 10 } }])

        res.status(200).json({ result: list, success: true, message: 'Lists fetched successfully' })

    }
    catch (err) {
        next(error(500, `${err.message} - getLists`))
    }
}


export const getList = async (req, res, next) => {
    try {
        const { listId } = req.params

        const list = await List.findById(listId)
        res.status(200).json({ result: list, success: true, message: 'List fetched successfully' })

    }
    catch (err) {
        next(error(500, `${err.message} - getList`))
    }
}


export const getRandomList = async (req, res, next) => {
    try {
        const { type } = req.query  // list | series

        let result
        type == 'series'
            ?
            result = await List.aggregate([
                { $match: { type: 'series' } },
                { $sample: { size: 1 } }
            ])
            :
            result = await List.aggregate([
                { $match: { type: 'movie' } },
                { $sample: { size: 1 } }
            ])

        res.status(200).json({ result, success: true, message: 'Random list successfully' })

    }
    catch (err) {
        next(error(500, `${err.message} - getRandomList`))
    }
}


export const createList = async (req, res, next) => {
    try {

        const result = await List.create(req.body)
        res.status(200).json({ result, success: true, message: 'List created successfully' })

    }
    catch (err) {
        console.log('error,', err)
        next(error(500, `${err.message} - createList`))
    }
}


export const updateList = async (req, res, next) => {
    try {
        const { listId } = req.params

        const result = await List.findByIdAndUpdate(listId, { $set: req.body }, { new: true })
        res.status(200).json({ result, success: true, message: 'List updated successfully' })

    }
    catch (err) {
        next(error(500, `${err.message} - updateList`))
    }
}


export const deleteList = async (req, res, next) => {
    try {
        const { listId } = req.params

        await List.findByIdAndDelete(listId)
        res.status(200).json({ success: true, message: 'List deleted successfully' })

    }
    catch (err) {
        next(error(500, `${err.message} - deleteList`))
    }
}
