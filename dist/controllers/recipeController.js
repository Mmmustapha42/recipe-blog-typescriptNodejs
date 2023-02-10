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
exports.homepage = void 0;
const categories_1 = __importDefault(require("../models/categories"));
const recipes_1 = __importDefault(require("../models/recipes"));
const homepage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, image } = req.body;
    try {
        const categories = yield categories_1.default.find({}).limit(5);
        const latestRecipes = yield recipes_1.default.find({}).sort({ _id: -1 }).limit(5);
        const thai = yield recipes_1.default.find({ 'category': 'Thai' }).limit(5);
        const chinese = yield recipes_1.default.find({ 'category': 'Chinese' }).limit(5);
        const american = yield recipes_1.default.find({ 'category': 'American' }).limit(5);
        const food = { latestRecipes };
        res.render('index', { title: 'Cooking Blog - Home', latestRecipes, categories, thai, chinese, american });
    }
    catch (err) {
        console.log({ msg: err });
    }
});
exports.homepage = homepage;
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
