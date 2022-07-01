"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const health_1 = require("../models/health");
class HealthCheckController extends _1.DefaultController {
    constructor() {
        super("/health");
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getHealthCheck);
    }
    getHealthCheck = (request, response) => {
        response.status(200).send((0, health_1.getHealthCheck)());
    };
}
exports.default = HealthCheckController;
//# sourceMappingURL=health.js.map