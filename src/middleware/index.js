import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import { rateLimiter } from './rate-limiter.middleware.js';
import { errorHandler } from './error.middleware.js';

export const setupMiddleware = (app) => {
  // Security and utility middleware
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "script-src": ["'self'", "cdn.tailwindcss.com", "'unsafe-inline'"],
      },
    }
  }));
  app.use(compression());
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(rateLimiter);
  
  // Serve static files
  app.use(express.static('public'));
  
  // Error handling should be last
  app.use(errorHandler);
};