const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');
const app = express();
const PORT = config.get("serverPort");

app.use(express.json());
app.use("/api/auth", authRouter);

const start = async () => {
    try {
        console.log('sadds', config.get("dbUrl"))
        await mongoose.connect(config.get("dbUrl"))

        app.listen(PORT, () => {
            console.log('Server is working on port', PORT);
        })
    } catch (e) {
        console.log('eeeeeeeeeee', e)

    }
}

start();
