import express, {Request, Response} from 'express'
import Recipes from '../models/recipes'

const exploreLatest = async (req:Request, res:Response) => {
   try{
    const recipe = await Recipes.find({}).sort({_id: -1}).limit(5)
    res.render('exploreLatest', {title: 'Cooking Blog - Latest Recipes', recipe})
     } catch(err){
        res.status(500).json({mes:err})
     }
   }
    

export default exploreLatest