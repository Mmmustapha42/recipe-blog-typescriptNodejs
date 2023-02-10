"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipeDesc_1 = __importDefault(require("../controllers/recipeDesc"));
const router = express_1.default.Router();
//App route
router.get('/:id', recipeDesc_1.default);
exports.default = router;
