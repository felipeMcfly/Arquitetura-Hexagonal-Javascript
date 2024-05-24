class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }

    addTask(req, res) {
        const { description } = req.body;
        const task = this.taskService.addTask(description);
        res.status(201).json(task);
    }

    completeTask(req, res) {
        const { id } = req.params;
        const task = this.taskService.completeTask(parseInt(id));
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    }

    listTasks(req, res) {
        const tasks = this.taskService.listTasks();
        res.status(200).json(tasks);
    }
}

module.exports = TaskController;