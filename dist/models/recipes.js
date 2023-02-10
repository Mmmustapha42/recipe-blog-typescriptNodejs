"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const recipesSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    email: {
        type: String
    },
    ingredients: {
        type: [String],
        required: true
    },
    category: {
        type: String,
        enum: ['Thai', 'American', 'Chinese', 'Spanish', 'Indian', 'Nigerian', 'Mexican'],
        required: true
    },
    image: {
        type: String,
        required: false
    }
});
recipesSchema.index({ name: "text", description: 'text' });
//recipesSchema.index({"$**": 'text'})
exports.default = mongoose_1.default.model('Recipes', recipesSchema);
