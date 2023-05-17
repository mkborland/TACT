// const dotenv = require('dotenv');
// dotenv.config();

import 'dotenv/config'

// // Exporting env variable
// module.exports = {
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
// };

export {CLIENT_ID, CLIENT_SECRET}