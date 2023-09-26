import express from "express";
import { mapOrder } from "./utils/sorts.js";
import { APIs_V1 } from "./routes/v1/index.js";
import { env } from "./config/environment.js";
const app = express();
import "dotenv/config";

app.use("/v1", APIs_V1);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Hoặc 3000 hoặc một số cổng khác
app.listen(env.PORT, env.HOST, () => {
  console.log(
    `Server ${env.AUTHOR} đang chạy trên cổng http://${env.HOST}:${env.PORT}`
  );
});
