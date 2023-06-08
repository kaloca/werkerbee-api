"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const addressSchema = new mongoose_1.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zip: { type: String, required: true },
}, { _id: false });
exports.default = addressSchema;
//# sourceMappingURL=addressSchema.js.map