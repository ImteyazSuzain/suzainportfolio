import express from "express";

import cors from "cors";

const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({}));

const port = 5000;
app.listen(port, console.log(`server listing to port 5000 only`));
