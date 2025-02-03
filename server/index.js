import http from "http";
import express from "express";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

const io = new Server(server);

socket.on("emoji", (socket) => {
  console.log(socket.id);
});

server.listen(8000, () => {
  console.log("Server is up and running");
});