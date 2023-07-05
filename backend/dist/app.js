"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import crudroute from './routes/crudroute'
const usersroute_1 = __importDefault(require("./routes/usersroute"));
const userprofileroute_1 = __importDefault(require("./routes/userprofileroute"));
dotenv_1.default.config();
const apps = (0, express_1.default)();
apps.use(express_1.default.json());
apps.use((0, cookie_parser_1.default)());
apps.use((0, morgan_1.default)("dev"));
apps.use('/users', usersroute_1.default);
apps.use('/profile', userprofileroute_1.default);
const PORT = 4000;
apps.listen(PORT, () => console.log(`App is listening to ${PORT}`));
exports.default = apps;
