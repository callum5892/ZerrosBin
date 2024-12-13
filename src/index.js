import express from 'express';
import { config } from './config/app.config.js';
import { setupMiddleware } from './middleware/index.js';
import { router } from './routes/paste.routes.js';

const app = express();

// Trust first proxy
app.set('trust proxy', 1);

// Setup middleware
setupMiddleware(app);

// API routes
app.use('/api', router);

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Start server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});