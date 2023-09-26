const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3011;

app.use(express.static(path.join(__dirname, "public"), {
    setHeaders: (res, path) => {
        if (path.endsWith(".css")) {
          res.setHeader("Content-Type", "text/css");
        }
      },
}));

app.get("/", (req, res) => {
    res.sendFile( path.join(__dirname, "/views/home.html") );
});
app.get("/register", (req, res) => {
  res.sendFile( path.join(__dirname, "/views/register.html") );
});
app.get("/login", (req, res) => {
  res.sendFile( path.join(__dirname, "/views/login.html") );
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});