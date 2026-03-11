import express from "express";
import { initHandler } from "./handlers/routes.js";
import { AppDataSource } from "./database/database.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

initHandler(app);

try {
  await AppDataSource.initialize();
} catch (error) {
  console.log(error);
  console.log("Failed to initialise database");
  process.exit(1);
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
