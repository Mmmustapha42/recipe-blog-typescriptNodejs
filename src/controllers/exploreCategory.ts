import express, {Request, Response} from 'express'
import Categories from '../models/categories'
import Recipes from '../models/recipes'


const exploreCategories = async (req:Request, res:Response) => {

        try {
            let categoryId = req.params.id
            const category = await Recipes.find({category:categoryId})
            res.render('exploreCategories', {title: 'Cooking Blog - Explore', category})
        }catch (err){
            console.log({msg:err})
        }
    
    }

    export default exploreCategories