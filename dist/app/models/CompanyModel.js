"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const addressSchema_1 = __importDefault(require("./schemas/addressSchema"));
const bankAccountSchema_1 = __importDefault(require("./schemas/bankAccountSchema"));
const pointSchema_1 = __importDefault(require("./schemas/pointSchema"));
const jobTypes = new mongoose_1.Schema({
    type: { type: String, required: true },
    rating: { type: Number, required: false },
});
const CompanySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        select: false,
    },
    location: {
        type: pointSchema_1.default,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    overallRating: {
        type: Number,
        required: false,
        default: -1,
    },
    jobTypes: {
        type: [jobTypes],
        required: true,
    },
    address: {
        type: addressSchema_1.default,
        required: true,
    },
    bankInfo: {
        type: bankAccountSchema_1.default,
        required: false,
        select: false,
    },
    hashedPassword: {
        type: String,
        required: true,
        select: false,
    },
}, {
    timestamps: true,
});
CompanySchema.index({ location: '2dsphere' });
exports.default = mongoose_1.default.model('Company', CompanySchema);
//# sourceMappingURL=CompanyModel.js.map