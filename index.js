const express = require("express");
const { body, validationResult } = require("express-validator");
const userRouter = require("./routes/user.route");
const app = express();
const PORT = 3000;

app.get("/test", (req, res) => {
  res.send("testing the server");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api",userRouter)


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
