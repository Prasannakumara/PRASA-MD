const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/6WRZcsB/eb0ef03007b9a177.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "HELLO, I am prasanna kumara, I am alive now",
};

