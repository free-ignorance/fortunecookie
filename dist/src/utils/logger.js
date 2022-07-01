"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logger = (0, winston_1.createLogger)({
    transports: [
        new winston_1.transports.Console({
            format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.printf(({ timestamp, level, message, metadata }) => {
                return `[${timestamp}] ${level}: ${message}. ${JSON.stringify(metadata)}`;
            })),
        }),
    ],
    format: winston_1.format.combine(winston_1.format.metadata(), winston_1.format.timestamp()),
});
exports.default = logger;
//# sourceMappingURL=logger.js.map