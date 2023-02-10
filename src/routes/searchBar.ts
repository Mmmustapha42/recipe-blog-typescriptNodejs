import express, {Router} from 'express'
import searchBar from '../controllers/searchbar'

const router:Router= express.Router()

router.post('/', searchBar)

export default router