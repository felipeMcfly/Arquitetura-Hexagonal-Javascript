class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    addTask(description) {
        const task = new this.taskRepository.TaskClass(
            this.taskRepository.nextId(),
            description
        );
        return this.taskRepository.save(task);
    }

    completeTask(id) {
        const task = this.taskRepository.findById(id);
        if (task) {
            task.complete();
            return this.taskRepository.save(task);
        }
        return null;
    }

    listTasks() {
        return this.taskRepository.findAll();
    }
}

module.exports = TaskService;
