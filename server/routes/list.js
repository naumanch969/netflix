import express from 'express'
import { getList, getLists, createList, deleteList, getRandomList, updateList } from '../controllers/list.js'
import { verifyAdmin, verifyToken } from '../middleware/auth.js'

const router = express.Router()

router.get('/all', verifyToken, getLists)
router.get('/:listId', verifyToken, getList)   // no use
router.get('/get/random', verifyToken, getRandomList)

router.post('/create', verifyToken, verifyAdmin, createList)
router.put('/update/:listId', verifyToken, verifyAdmin, updateList)
router.delete('/delete/:listId', verifyToken, verifyAdmin, deleteList)

export default router