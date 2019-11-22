const express = require("express")
const {getHTML} = require("./serverHTML.js")
const port = 4000


export function initSetup() {
const app = express()

// app.use(express.static("./dist"));

app.use("/", function routeHandler(req, res){  
  res.send(getHTML("Hello World"));
});

app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`)
});
}