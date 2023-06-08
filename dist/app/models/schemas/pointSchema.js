"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const pointSchema = new mongoose_1.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
});
exports.default = pointSchema;
//# sourceMappingURL=pointSchema.js.map