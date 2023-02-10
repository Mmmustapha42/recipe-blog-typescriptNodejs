"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const recipeRoute_1 = __importDefault(require("./routes/recipeRoute"));
const categories_1 = __importDefault(require("./routes/categories"));
const recipeDesc_1 = __importDefault(require("./routes/recipeDesc"));
const exploreCategory_1 = __importDefault(require("./routes/exploreCategory"));
const searchBar_1 = __importDefault(require("./routes/searchBar"));
const exploreLatest_1 = __importDefault(require("./routes/exploreLatest"));
const showRandom_1 = __importDefault(require("./routes/showRandom"));
const submitRecipe_1 = __importDefault(require("./routes/submitRecipe"));
const config_1 = require("./config/config");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const connect_flash_1 = __importDefault(require("connect-flash"));
const app = (0, express_1.default)();
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect(config_1.config.mongo.url)
    .then(data => {
    app.listen(config_1.config.server.port, () => {
        console.log(`listening on port ${config_1.config.server.port}`);
    });
})
    .catch(err => console.log(`this is the ${err}`));
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");
app.set('layout', 'layouts/layout');
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_ejs_layouts_1.default);
app.use((0, cookie_parser_1.default)('CookingBlogSecure'));
app.use((0, express_session_1.default)({
    secret: 'CookingBlogSecretSession',
    saveUninitialized: true,
    resave: true
}));
app.use((0, connect_flash_1.default)());
app.use((0, express_fileupload_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use('/', recipeRoute_1.default);
app.use('/recipe', recipeDesc_1.default);
app.use('/categories', categories_1.default);
app.use('/categories', exploreCategory_1.default);
app.use('/search', searchBar_1.default);
app.use('/explore-latest', exploreLatest_1.default);
app.use('/show-random', showRandom_1.default);
app.use('/submit-recipe', submitRecipe_1.default);
