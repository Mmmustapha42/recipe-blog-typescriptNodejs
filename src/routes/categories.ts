import express, {Request, Response, Router} from "express";
import exploreCategories from '../controllers/categories'

const router = express.Router()

//App route

router.get('/', exploreCategories)




export default router;