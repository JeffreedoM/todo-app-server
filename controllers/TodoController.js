import Todo from "../models/TodoModel.js";

export const getTodo = async (req, res) => {
  try {
    const todo = await Todo.find({});
    return res.status(200).send(todo);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  const { todo } = req.body;
  try {
    const newTodo = await Todo.create({ todo });
    return res.status(200).send(newTodo);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTodo = await Todo.findOneAndDelete(id);
    return res.status(200).send(deleteTodo);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
