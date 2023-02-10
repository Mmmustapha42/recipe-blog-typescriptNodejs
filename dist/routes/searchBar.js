"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const searchbar_1 = __importDefault(require("../controllers/searchbar"));
const router = express_1.default.Router();
router.post('/', searchbar_1.default);
exports.default = router;
