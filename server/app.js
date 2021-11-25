import express from "express";
import cors from "cors";
import "./db/conn.js";
import router from "./routers/routes.js";

const app = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("I am live at " + port);
});
