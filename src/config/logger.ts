import winston from 'winston';

const transports: winston.transport[] = [new winston.transports.Console()];

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  transports,
});

