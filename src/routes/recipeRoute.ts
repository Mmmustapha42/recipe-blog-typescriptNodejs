import express, {Request, Response, Router} from "express";
import {homepage} from '../controllers/recipeController'

const router = express.Router()

//App route

router.get('/', homepage)




export default router;