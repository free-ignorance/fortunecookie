"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const fortune_1 = require("../models/fortune");
class MainController extends _1.DefaultController {
    constructor() {
        super("/");
        this.getFortuneRandom = (request, response) => {
            response.status(200).send({
                data: {
                    message: `${fortune_1.getFortune()}`,
                },
                meta: {
                    status: 200,
                },
            });
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getFortuneRandom);
    }
}
exports.default = MainController;
//# sourceMappingURL=main.js.map