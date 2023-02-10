"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const submitRecipe_1 = require("../controllers/submitRecipe");
const router = express_1.default.Router();
router.get('/', submitRecipe_1.submitRecipe);
router.post('/', submitRecipe_1.AddsubmitRecipe);
exports.default = router;
