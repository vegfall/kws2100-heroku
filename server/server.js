import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const TASKS = [
  {
    id: 1,
    title: "task1",
    status: "done",
  },
  {
    id: 2,
    title: "task2",
    status: "begun",
  },
];

app.get("/api/tasks", (req, res) => {
  {
    res.json(TASKS);
  }
});

app.use(express.static("../client/dist"));

app.listen(process.env.PORT || 3000);
