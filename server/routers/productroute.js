import express from 'express'
import  { products,getsigle } from'../controllers/productcontroller.js'

const route=express.Router()

route.get('/getproducts',products)

route.get('/getsin/:id',getsigle)

export default route