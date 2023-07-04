"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crudcontrollers_1 = require("../controllers/crudcontrollers");
const router = express_1.default.Router();
router.get('/', crudcontrollers_1.createcrud);
router.get('/:id', crudcontrollers_1.createcrudById);
router.post('/', crudcontrollers_1.postcrud);
router.delete('/:id', crudcontrollers_1.deletecrud);
router.put('/:id', crudcontrollers_1.updatedcrud);
exports.default = router;
