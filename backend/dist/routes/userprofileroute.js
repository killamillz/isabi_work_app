"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../utilities/auth");
const userprofilecontrollers_1 = require("../controllers/userprofilecontrollers");
const router = express_1.default.Router();
router.post('/page', auth_1.auth, userprofilecontrollers_1.createprofile);
router.get('/skill', userprofilecontrollers_1.getallartisans);
router.get('/', userprofilecontrollers_1.getallartisansBySkill);
exports.default = router;
