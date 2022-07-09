import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import roleRouters from "./routes/routes.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8000;

// routes
app.use("/roles", roleRouters);
app.get("/", (req, res) => {
  res.send("Hello, welcome BC_Platforms !!!");
});

app.listen(PORT, () => {
  console.log(`server is ready at ${PORT}`);
});
