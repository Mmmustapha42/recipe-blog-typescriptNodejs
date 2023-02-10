import express, {Request, Response, Router} from "express";
import recipeDesc from "../controllers/recipeDesc";

const router = express.Router()

//App route

router.get('/:id', recipeDesc)




export default router;