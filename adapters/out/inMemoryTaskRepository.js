const TaskRepositoryPort = require('../../ports/TaskRepositoryPort');
const Task = require('../../domain/Task');

class InMemoryTaskRepository extends TaskRepositoryPort {
    constructor() {
        super();
        this.tasks = [];
    }

    save(task) {
        const index = this.tasks.findIndex(t => t.id === task.id);
        if (index > -1) {
            this.tasks[index] = task;
        } else {
            this.tasks.push(task);
        }
        return task;
    }

    findById(id) {
        return this.tasks.find(task => task.id === id);
    }

    findAll() {
        return this.tasks;
    }

    nextId() {
        return this.tasks.length + 1;
    }

    get TaskClass() {
        return Task;
    }
}

module.exports = InMemoryTaskRepository;
