const express = require('express');
const bodyParser = require('body-parser');
const TaskService = require('./domain/TaskService');
const TaskController = require('./adapters/in/TaskController');
const InMemoryTaskRepository = require('./adapters/out/inMemoryTaskRepository');

const app = express();
app.use(bodyParser.json());

const taskRepository = new InMemoryTaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

app.post('/tasks', (req, res) => taskController.addTask(req, res));
app.put('/tasks/:id/complete', (req, res) => taskController.completeTask(req, res));
app.get('/tasks', (req, res) => taskController.listTasks(req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
