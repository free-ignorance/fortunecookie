"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const fortune_1 = require("../models/fortune");
class MainController extends _1.DefaultController {
    constructor() {
        super("/");
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getFortuneRandom);
    }
    getFortuneRandom = (request, response) => {
        response.status(200).send({
            data: {
                message: `${(0, fortune_1.getFortune)()}`,
            },
            meta: {
                status: 200,
            },
        });
    };
}
exports.default = MainController;
//# sourceMappingURL=main.js.map