"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
class DefaultController {
    constructor(path, router) {
        this.path = "/";
        this.router = express.Router();
        this.path = path;
        this.router = router || express.Router();
    }
}
exports.DefaultController = DefaultController;
//# sourceMappingURL=index.js.map