import express, {Request, Response} from 'express'
import Category from '../models/categories'
import Recipes from '../models/recipes'

const homepage = async (req:Request, res:Response) => {

   const {name, image} = req.body
    try {
        const categories = await Category.find({}).limit(5)
        const latestRecipes = await Recipes.find({}).sort({_id: -1}).limit(5)
        const thai = await Recipes.find({'category': 'Thai'}).limit(5)
        const chinese = await Recipes.find({'category': 'Chinese'}).limit(5)
        const american = await Recipes.find({'category': 'American'}).limit(5)

        const food = {latestRecipes}
        res.render('index', {title: 'Cooking Blog - Home', latestRecipes, categories, thai, chinese, american})
    }catch (err){
        console.log({msg:err})
    }
}


export {homepage}

/*async function insertDummy(){
    try{
      await Category.insertMany([
        {
            name: "Thai",
            image: "thai-food.jpg"
        },
        {
            name: "American",
            image: "american-food.jpg"
        },
        {
            name: "Chinese",
            image: "chinese-food.jpg"
        },
        {
            name: "Mexican",
            image: "mexican-food.jpg"
        },
        {
            name: "Indian",
            image: "thai-food.jpg"
        },
        {
            name: "Spanish",
            image: "spanish-food.jpg"
        },
     ])
     console.log('deposited')

    }catch(err){
        console.log(err)
    }
}*/