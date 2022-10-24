const router = require("express").Router();
const Todo = require("../models/Todo");

// routes
router.post("/add/todo", (req, res) => {
  // const todo = req.body.todo
  const { todo } = req.body;
  const newTodo = new Todo({ todo });

  //save the todo
  newTodo
    .save()
    .then(() => {
      console.log("Successfully added todo");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

router.get("/delete/todo/:_id", async (req, res) => {
  const { _id } = req.params;
  await Todo.deleteOne({ _id })
    .then(() => {
      console.log("Todo deleted succesfully");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
