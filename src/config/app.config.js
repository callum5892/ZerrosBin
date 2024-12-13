export const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per windowMs
  },
  url: `http://localhost:${process.env.PORT || 3000}`,
};