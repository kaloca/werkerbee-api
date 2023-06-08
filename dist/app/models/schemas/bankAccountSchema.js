"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bankAccountSchema = new mongoose_1.Schema({
    bankName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    routingNumber: { type: String, required: true },
}, { _id: false });
exports.default = bankAccountSchema;
//# sourceMappingURL=bankAccountSchema.js.map