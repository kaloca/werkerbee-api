"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const WorkerModel_1 = __importDefault(require("@/app/models/WorkerModel"));
const secrets_1 = require("@/app/util/secrets");
const CompanyModel_1 = __importDefault(require("@/app/models/CompanyModel"));
const login = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const worker = (await WorkerModel_1.default.findOne({ email }).select('+hashedPassword')) ||
            (await WorkerModel_1.default.findOne({ username: email }).select('+hashedPassword'));
        const company = (await CompanyModel_1.default.findOne({
            email,
        }).select('+hashedPassword')) ||
            (await CompanyModel_1.default.findOne({
                username: email,
            }).select('+hashedPassword'));
        const user = worker || company;
        if (!user)
            return res.status(400).send('user not found');
        const isCorrectPassword = await bcrypt_1.default.compare(password, user.hashedPassword);
        if (!isCorrectPassword)
            return res.status(400).send('incorrect password');
        const base64AuthSecret = secrets_1.AUTH_SECRET;
        const authSecret = Buffer.from(base64AuthSecret, 'base64').toString('utf8');
        const token = await jsonwebtoken_1.default.sign({ userId: user._id }, authSecret, {
            expiresIn: '7d',
        });
        res.cookie('auth', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 7 * 24 * 3600 * 1000, // 1 week
        });
        return res.status(200).json({
            message: 'Logged in successfully',
            type: worker ? 'worker' : 'company',
            id: user._id,
            username: user.username,
        });
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
const LoginController = { login };
exports.default = LoginController;
//# sourceMappingURL=LoginController.js.map