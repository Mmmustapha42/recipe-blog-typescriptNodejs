import express, {Router} from 'express'
import {AddsubmitRecipe, submitRecipe} from '../controllers/submitRecipe'

const router:Router= express.Router()

router.get('/', submitRecipe)
router.post('/', AddsubmitRecipe)

export default router