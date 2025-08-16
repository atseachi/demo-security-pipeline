import express from "express";
const app = express();
const port = process.env.PORT || 8080;

app.get("/health", (req, res) => res.send("ok"));
app.get("/", (req, res) => res.send("Hello from demo-app"));

app.listen(port, () => console.log(`App listening on ${port}`));
