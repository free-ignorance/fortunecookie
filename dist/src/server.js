"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const health_1 = __importDefault(require("./controllers/health"));
const main_1 = __importDefault(require("./controllers/main"));
const app = new app_1.default([new health_1.default(), new main_1.default()]);
app.listen();
//# sourceMappingURL=server.js.map