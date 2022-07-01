"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const health_1 = require("../models/health");
class HealthCheckController extends _1.DefaultController {
    constructor() {
        super("/health");
        this.getHealthCheck = (request, response) => {
            response.status(200).send(health_1.getHealthCheck());
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getHealthCheck);
    }
}
exports.default = HealthCheckController;
//# sourceMappingURL=health.js.map