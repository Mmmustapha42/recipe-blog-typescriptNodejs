"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddsubmitRecipe = exports.submitRecipe = void 0;
const recipes_1 = __importDefault(require("../models/recipes"));
const submitRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const infoErrorsObj = req.flash('infoErrors');
    const submitObj = req.flash('infoSubmit');
    try {
        res.render('submitRecipe', { title: 'Cooking Blog - Submit Recipe', infoErrorsObj, submitObj });
    }
    catch (err) {
        console.log({ msg: err });
    }
});
exports.submitRecipe = submitRecipe;
const AddsubmitRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let imageUploadFile;
        let uploadPath;
        let newImageName;
        if (!req.files || Object.keys(req.files).length === 0) {
            console.log('No files Where uploaded');
        }
        else {
            imageUploadFile = req.files.image;
            newImageName = Date.now();
            uploadPath = require('path').resolve('/') + '/public/uploads' + newImageName;
            //imageUploadFile.mv(uploadPath, function(err:any){
            // if (err) return res.status(500).send(err);
            // })
        }
        req.flash('infoSubmit', 'Recipe added successfully');
        const { email, name, description, image, ingredients, category } = req.body;
        const nrecipios = yield recipes_1.default.create({ email, name, description, category, image, ingredients });
        if (nrecipios) {
            return res.redirect('/submit-recipe');
        }
        //res.render('submitRecipe', {title: 'Cooking Blog - Submit Recipe',})
    }
    catch (error) {
        req.flash('infoErrors', error);
        res.redirect('/submit-recipe');
    }
});
exports.AddsubmitRecipe = AddsubmitRecipe;
