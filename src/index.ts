<<<<<<< HEAD
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
=======
import express from "express"
import "reflect-metadata"
import { initHandlers } from "./handlers/routes.js";
import { AppDataSource } from "./database/database.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())

initHandlers(app);
try {
    await AppDataSource.initialize();
} catch(error) {
    console.log(error)
    console.log("failed to initialized database conection")
    process.exit(1)
}

app.listen(PORT, () => {
    console.log("App is listening on port " + PORT)
})
>>>>>>> ecb1c888baafdf47f46a960f3d70b2369a972779
