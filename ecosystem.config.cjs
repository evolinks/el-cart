/**
 * @fileoverview -
 * @version: 1.0.0
 * @since:2023-02-05
 */
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  apps: [
    {
      name: 'el-cart',
      script: 'src/server.js',
      instances: 10,
      autorestart: true,
      max_memory_restart: '1G',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      error_file: './logs/err.log',
      watch: '.',
    },
  ],
  deploy: {
    production: {
      user: process.env.SSH_USERNAME,
      host: process.env.SSH_HOST,
      ref: 'origin/main',
      repo: 'git@https://github.com/evolinks/el-cart.git',
      path: process.env.SSH_PATH,
      'post-deploy': 'npm i && pm2 reload ecosystem.config.cjs',
    },
  },
};
