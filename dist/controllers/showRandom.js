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
const showRandom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let count = yield recipes_1.default.find().countDocuments();
        let randomRec = Math.floor(Math.random() * count);
        const random = yield recipes_1.default.findOne().skip(randomRec).exec();
        res.render('showRandom', { title: 'Cooking Blog - Latest Recipes', random });
    }
    catch (err) {
        res.status(500).json({ mes: err });
    }
});
exports.default = showRandom;
