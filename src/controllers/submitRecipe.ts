import express, {Request, Response} from 'express'
import Recipes from '../models/recipes'

 export const submitRecipe = async (req:Request, res:Response)=> {
    const infoErrorsObj = req.flash('infoErrors')
    const submitObj = req.flash('infoSubmit')
 
    try{
        res.render('submitRecipe', {title: 'Cooking Blog - Submit Recipe', infoErrorsObj, submitObj})
    }catch(err){
        console.log({msg:err})
    }

}

export const AddsubmitRecipe = async (req:Request, res:Response)=> {

    try{

        let imageUploadFile;
        let uploadPath;
        let newImageName;

        if (!req.files || Object.keys(req.files).length === 0) {
            console.log('No files Where uploaded')
        } else {
            imageUploadFile = req.files.image;
            newImageName = Date.now()

            uploadPath = require('path').resolve('/') + '/public/uploads' + newImageName
            //imageUploadFile.mv(uploadPath, function(err:any){
               // if (err) return res.status(500).send(err);
           // })
        }


        req.flash('infoSubmit', 'Recipe added successfully')
        const {email, name, description, image, ingredients,category} = req.body

        const nrecipios = await Recipes.create({email, name, description, category, image, ingredients})
        if (nrecipios){
            return res.redirect('/submit-recipe')
        }
        //res.render('submitRecipe', {title: 'Cooking Blog - Submit Recipe',})
    }catch(error:any){
        req.flash('infoErrors', error )
        res.redirect('/submit-recipe')
    }

}

 