import { createLogger, transports, format } from "winston";

// Create a logger instance
const logger = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ timestamp, level, message, metadata }) => {
          return `[${timestamp}] ${level}: ${message}. ${JSON.stringify(
            metadata
          )}`;
        })
      ),
    }),
  ],
  format: format.combine(format.metadata(), format.timestamp()),
});

export default logger;
