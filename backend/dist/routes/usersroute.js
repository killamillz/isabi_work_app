"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userscontrollers_1 = require("../controllers/userscontrollers");
const router = express_1.default.Router();
router.post('/signup', userscontrollers_1.createuser);
router.post('/login', userscontrollers_1.loginuser);
exports.default = router;
