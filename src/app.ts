import express, {Request, Response, Application} from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import expressEjsLayouts from 'express-ejs-layouts'
import homepage from './routes/recipeRoute'
import exploreCategories from './routes/categories'
import recipeDesc from './routes/recipeDesc'
import exploreCategory from './routes/exploreCategory'
import searchBar from './routes/searchBar'
import exploreLatest from './routes/exploreLatest'
import showRandom from './routes/showRandom'
import submitRecipe from './routes/submitRecipe'
import {config} from './config/config'
import fileUpload from 'express-fileupload'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import flash from 'connect-flash'

const app:Application = express()
mongoose.set('strictQuery', true)
mongoose.connect(config.mongo.url)
.then(data => {
    app.listen(config.server.port, () : void => {
        console.log(`listening on port ${config.server.port}`)
    })  
})
.catch(err => console.log(`this is the ${err}`))


app.set('view engine', 'ejs')
app.set('views', __dirname + "/views")
app.set('layout', 'layouts/layout')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(expressEjsLayouts)
app.use(cookieParser('CookingBlogSecure'))
app.use(session({
    secret:'CookingBlogSecretSession',
    saveUninitialized:true,
    resave:true
}))
app.use(flash())
app.use(fileUpload())
app.use(morgan('dev'))


app.use('/', homepage)
app.use('/recipe', recipeDesc)
app.use('/categories', exploreCategories)
app.use('/categories', exploreCategory)
app.use('/search', searchBar)
app.use('/explore-latest', exploreLatest)
app.use('/show-random', showRandom)
app.use('/submit-recipe', submitRecipe)
