// Initialize environment variables
import dotenv from "dotenv";
dotenv.config();

// Imports
import express from "express";
import { Config } from "./config";
import mongoose from "mongoose";
import albumsRouter from "./routes/albumsRouter";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.send("Luke's API!");
});

app.get("/dbtest", (_req, res) => {
    res.send("test");
});

app.use("/albums", albumsRouter);

// Connect to DB
mongoose
    .connect(Config.MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() =>
        app.listen(Config.PORT, () => {
            console.log(`Listening on port ${Config.PORT}...`);
        })
    )
    .catch((error) => console.log(error));
