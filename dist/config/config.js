"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || '';
const MONGODB_URL = `mongodb+srv://lordlonso:${MONGODB_PASSWORD}@nodeexpressproject.purussx.mongodb.net/?retryWrites=true&w=majority`;
const port = process.env.PORT || 5001;
exports.config = {
    mongo: {
        url: MONGODB_URL
    },
    server: {
        port: port
    }
};
