const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
})
client.connect()

module.exports = client