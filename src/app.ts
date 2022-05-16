import express, { Router } from "express";

const app = express();

app.use(express.json());
app.use(Router());

export { app };
