"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const pkjson = __importStar(require("../../package.json"));
const format_1 = require("../utils/format");
function getHealthCheck() {
    const time = process.uptime();
    const uptime = format_1.toDDHHMMSS(time);
    return {
        data: {
            message: "ok",
        },
        meta: {
            date: `${new Date().toISOString()}`,
            uptime: `${uptime}`,
            version: `${pkjson.version}`,
        },
    };
}
exports.getHealthCheck = getHealthCheck;
//# sourceMappingURL=health.js.map