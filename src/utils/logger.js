/**
 * @fileoverview -
 * @version: 1.0.0
 * @since:2023-02-05
 */
import 'winston-daily-rotate-file';
import winston from 'winston';

const logger = winston.createLogger({
  json: true,
  transports: [
    new winston.transports.DailyRotateFile({
      name: 'error',
      level: 'error',
      filename: './logs/%DATE%-error.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
    new winston.transports.DailyRotateFile({
      name: 'info',
      level: 'info',
      filename: './logs/%DATE%-success.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

/* if we not in production then log to the console */
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    })
  );
}

export default logger;
