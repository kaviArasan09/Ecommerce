import express from 'express'
import { createOrder } from '../controllers/ordercontroller'

const router=express.Router()

router.post('/order',createOrder)