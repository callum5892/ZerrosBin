/**
 * Get client IP address from request object
 * @param {import('express').Request} req
 * @returns {string|null}
 */
export const getClientIp = (req) => {
  // Check X-Forwarded-For header
  const forwardedFor = req.headers['x-forwarded-for'];
  if (forwardedFor) {
    // Get the first IP in the list (client's original IP)
    const ips = forwardedFor.split(',').map(ip => ip.trim());
    return ips[0];
  }

  // Check other common headers
  const realIp = req.headers['x-real-ip'];
  if (realIp) {
    return realIp;
  }

  // Get IP from request object
  return req.ip || req.connection.remoteAddress || null;
};