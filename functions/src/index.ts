import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";

const app = express();

app.use(cors({ origin: true }));

app.get("/api", (req, res) => res.send("HELLO API"));

export const api = functions.https.onRequest(app);
