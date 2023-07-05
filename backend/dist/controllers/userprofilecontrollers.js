"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getallartisansBySkill = exports.getallartisans = exports.createprofile = void 0;
const db_1 = require("../db");
const queries = require("../queries");
const createprofile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const email_address = req.body.email_address;
        const phone_number = req.body.phone_number;
        const age = req.body.age;
        const skill = req.body.skill;
        const description = req.body.description;
        const city = req.body.city;
        const state = req.body.state;
        const country = req.body.country;
        const postprofileQuery = db_1.profile.query(queries.postprofile, [first_name, last_name, email_address, phone_number, age, skill, description, city, state, country]);
        yield postprofileQuery;
        res.status(200).send("Profile created successfully");
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error has occurred');
    }
});
exports.createprofile = createprofile;
const getallartisans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getuserprofileQuery = db_1.profile.query(queries.getuserprofile);
        const getProfile = yield getuserprofileQuery;
        res.status(200).json(getProfile.rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error has occurred');
    }
});
exports.getallartisans = getallartisans;
const getallartisansBySkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skill = req.body.skill;
        const getStudentQueryBySkill = db_1.profile.query(queries.getprofileBySkill, [skill]);
        const getUserBySkill = yield getStudentQueryBySkill;
        res.status(200).json(getUserBySkill.rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("An ERROR has occurred");
    }
});
exports.getallartisansBySkill = getallartisansBySkill;
