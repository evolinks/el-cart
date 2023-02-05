/**
 * @fileoverview -
 * @version: 1.0.0
 * @since:2023-02-05
 */
import http from 'http';
import ip from 'ip';
import app from './index.js';
import logger from './utils/logger.js';

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(PORT, () => {
  setTimeout(() => {
    process.env.NODE_ENV === 'production';
    logger.info(`Web Server is running on http://${ip.address()}:${PORT}`);
  }, 3000);
});
