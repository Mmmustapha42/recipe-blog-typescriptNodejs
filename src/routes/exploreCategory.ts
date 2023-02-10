import express, {Request, Response, Router} from "express";
import exploreCategories from "../controllers/exploreCategory";

const router = express.Router()

//App route

router.get('/:id', exploreCategories)




export default router;