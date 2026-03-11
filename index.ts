import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.send({
    message: "Hello World!",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
