"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const JobTypeSchema = new mongoose_1.Schema({
    type: { type: String, required: true, unique: true },
});
exports.default = (0, mongoose_1.model)('JobType', JobTypeSchema);
//# sourceMappingURL=JobTypeModel.js.map