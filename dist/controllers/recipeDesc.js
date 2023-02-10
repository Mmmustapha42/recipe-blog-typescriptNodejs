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
const recipes_1 = __importDefault(require("../models/recipes"));
const recipeDesc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let recipeId = req.params.id;
        const recipe = yield recipes_1.default.findById(recipeId);
        res.render('recipeDesc', { title: 'Cooking Blog - Recipe', recipe });
        //console.log(recipe?.ingredients)
    }
    catch (err) {
        console.log({ msg: err });
    }
});
exports.default = recipeDesc;
