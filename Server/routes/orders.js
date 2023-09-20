import express from 'express'
import {verifyToken} from '../middlewares/verifyToken.js'
import { createOrder, getUserOrders, trackOrders, getAllOrders, getOrderDetail } from '../controllers/order.js'

const router = express.Router()

//post Request
router.post('/create', verifyToken, createOrder)

//get Request
router.get('/user', verifyToken, getUserOrders)
router.get('/', verifyToken, getAllOrders)
router.get('/:id', verifyToken, getOrderDetail)

//PUT Request
router.put('/:id/tracking', verifyToken, trackOrders)

export default router