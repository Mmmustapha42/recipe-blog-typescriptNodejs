import express, {Router} from 'express'
import exploreLatest from '../controllers/exploreLatest'

const router:Router = express.Router()

router.get('/', exploreLatest)

export default router