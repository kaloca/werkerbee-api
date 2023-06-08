"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
// Get port from environment and store in Express.
const port = process.env.PORT || 3000;
// Create HTTP server.
app_1.default.listen(port, () => console.log(`Listening at port ${port}`));
//# sourceMappingURL=index.js.map