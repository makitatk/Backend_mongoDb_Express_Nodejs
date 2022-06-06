import "dotenv/config";
import express from "express";
import "./database/connectdb.js";
import authRouter from "./routes/auth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//middlewares
//app.use(express.json());
app.use("/api/v1/auth", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("🐕🐕🐖🐖🐖 http://localhost" + PORT));
