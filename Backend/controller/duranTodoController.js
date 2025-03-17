import duranModel from "../models/duranModel.js";

// Create new task
export const createTask = async (req, res) => {
  try {
    const { title, description, status, due_date } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title must be provided" });
    }

    // create the task
    const task = await duranModel.create({
      title,
      description,
      status: status || "Pending",
      due_date,
    });

    res.status(201).json(task);
  } catch (error) {
    console.error("error >>>", error);
    res.status(500).json({ error: error.message });
  }
};

// Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await duranModel.findAll({
      order: [["createdAt", "ASC"]],
    });

    res.status(200).json(tasks);
  } catch (error) {
    console.error("error >>>", error);
    res.status(500).json({ error: error.message });
  }
};

// Get a single task by ID
export const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await duranModel.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: "Task not found or doesn't exist" });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error("error >>>", error);
    res.status(500).json({ error: error.message });
  }
};

// Update a task
export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, status, due_date } = req.body;

    // find task
    const task = await duranModel.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: "Task not found or doesn't exist" });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;
    task.due_date = due_date || task.due_date;

    await task.save(task);

    res.status(200).json(task);
  } catch (error) {
    console.error("error >>>", error);
    res.status(500).json({ error: error.message });
  }
};

// delete a task
export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    // find task
    const task = await duranModel.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ error: "Task not found or doesn't exist" });
    }

    // delete the task
    await task.destroy();

    res.status(204).send();
  } catch (error) {
    console.error("error >>>", error);
    res.status(500).json({ error: error.message });
  }
};
