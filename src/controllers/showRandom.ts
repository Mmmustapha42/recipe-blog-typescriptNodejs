import express, {Request, Response} from 'express'
import Recipes from '../models/recipes'

const showRandom = async (req:Request, res:Response) => {
   try{

    let count = await Recipes.find().countDocuments()
    let randomRec = Math.floor(Math.random() * count)
    const random = await Recipes.findOne().skip(randomRec).exec()
    res.render('showRandom', {title: 'Cooking Blog - Latest Recipes', random})
     } catch(err){
        res.status(500).json({mes:err})
     }
   }
    

export default showRandom