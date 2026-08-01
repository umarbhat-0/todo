const express = require('express');
const app = express();
const router = require("./routes/auth.routes");
const todorouter = require('./routes/todo.routes')
const cookieParser = require('cookie-parser');
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());



app.use('/api',router)
app.use('/api',todorouter)








module.exports = app