import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");

const PORT = 5228;

const home = (req, res) => {
  return res.send("I home");
};

app.use(logger);
app.get("/", home);

const handleListning = () =>
  console.log(`Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListning);
