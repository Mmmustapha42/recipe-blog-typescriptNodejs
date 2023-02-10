import express, {Router} from 'express'
import showRandom from '../controllers/showRandom'

const router:Router = express.Router()

router.get('/', showRandom)

export default router