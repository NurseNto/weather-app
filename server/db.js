require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOSTNAME,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT, // Default PostgreSQL port
});

module.exports = pool;
