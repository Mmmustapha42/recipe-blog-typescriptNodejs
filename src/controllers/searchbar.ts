import express, {Request, Response} from 'express'
import Recipes from '../models/recipes'

const search = async (req:Request, res:Response)=> {

    try{
        let search = req.body.search
        let recipe = await Recipes.find({$text:{$search: search, $diacriticSensitive:true}})
        res.render('search', {title: 'Cooking Blog - Search', recipe})
    }catch(err){
        console.log({msg:err})
    }

}
export default search