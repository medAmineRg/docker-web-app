const app = require("express")();

app.get("/", (req, res) => {
  res.send({ docker: "awesome" });
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on port ${port}`));
