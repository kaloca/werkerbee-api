"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const WorkerModel_1 = __importDefault(require("@/app/models/WorkerModel"));
const CompanyModel_1 = __importDefault(require("@/app/models/CompanyModel"));
const checkExistingEmail = async (email, res) => {
    const worker = await WorkerModel_1.default.findOne({ email });
    const company = await CompanyModel_1.default.findOne({ email });
    if (worker || company) {
        res
            .status(400)
            .json({ message: 'an account with this email already exists' });
        return true;
    }
    return false;
};
const registerWorker = async (req, res) => {
    try {
        const { name, phoneNumber, birthday, email, location, ssn, jobTypes, password, username, address, } = req.body;
        console.log(req.body);
        if (await checkExistingEmail(email, res))
            return;
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const newWorker = new WorkerModel_1.default({
            name,
            phoneNumber,
            birthday,
            email,
            location,
            ssn,
            jobTypes,
            hashedPassword,
            username,
            address,
        });
        await newWorker.save();
        return res.status(200).json({ message: 'New worker created successfuly' });
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
const registerCompany = async (req, res) => {
    try {
        const { name, email, username, location, type, password, jobTypes, address, } = req.body;
        if (await checkExistingEmail(email, res))
            return;
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const newCompany = new CompanyModel_1.default({
            name,
            email,
            description: 'hey',
            username,
            location,
            type,
            address,
            jobTypes,
            hashedPassword,
        });
        await newCompany.save();
        return res.status(200).json({ message: 'New company created successfuly' });
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
const checkValidEmailUsername = async (req, res) => {
    const { email, username } = req.body;
    try {
        const emailExists = (await WorkerModel_1.default.exists({ email })) ||
            (await CompanyModel_1.default.exists({ email }));
        const usernameExists = (await WorkerModel_1.default.exists({ username })) ||
            (await CompanyModel_1.default.exists({ username }));
        return res.status(200).json({
            emailExists,
            usernameExists,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error checking email and username' });
    }
};
const RegisterController = {
    registerCompany,
    registerWorker,
    checkValidEmailUsername,
};
exports.default = RegisterController;
//# sourceMappingURL=RegisterController.js.map