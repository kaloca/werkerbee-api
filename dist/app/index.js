"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const secrets_1 = require("./util/secrets");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Middleware to delay all requests by 3 seconds
// app.use((req, res, next) => {
// 	setTimeout(next, 3000)
// })
app.use(routes_1.default);
const mongoUrl = secrets_1.MONGODB_URI;
mongoose_1.default.connect(mongoUrl);
exports.default = app;
//# sourceMappingURL=index.js.map