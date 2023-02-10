import express, {Request, Response} from 'express'
import Recipes from '../models/recipes'


const recipeDesc = async (req:Request, res:Response) => {

        try {
            let recipeId = req.params.id
            const recipe = await Recipes.findById(recipeId)
            res.render('recipeDesc', {title: 'Cooking Blog - Recipe', recipe})
            
            //console.log(recipe?.ingredients)
        }catch (err){
            console.log({msg:err})
        }
    
    }

    export default recipeDesc