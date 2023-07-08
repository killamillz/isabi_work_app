"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.userSchema = zod_1.default.object({
    username: zod_1.default.string({
        required_error: "Username cannot be empty"
    }),
    email: zod_1.default.string({
        required_error: "email cannot be empty"
    }).email({
        message: "Please enter a valid email address"
    }),
    phone_number: zod_1.default.string({
        required_error: "Phone Number cannot be empty"
    }).min(11).max(11),
    password: zod_1.default.string({
        required_error: "Password cannot be empty"
    }).min(5).max(10)
});
