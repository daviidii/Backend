import Logger from "./utils/Logger.js";
import InitializeApp from "./utils/InitializeApp.js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import SampleRouter from "./routes/sample-routes.js";
import TodoRouter from "./routes/duran-todo-routes.js";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
Logger.setup(app);

// app.use('/sample', SampleRouter);
app.use("/duran", TodoRouter);

InitializeApp.init(app)
  .then(() => {
    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      Logger.info(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Initialization error:", error);
    Logger.error("Initialization error:" + error);
  });
