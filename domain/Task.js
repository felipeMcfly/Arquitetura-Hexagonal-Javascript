class Task {
    constructor(id, description) {
        this.id = id;
        this.description = description;
        this.completed = false;
    }

    complete() {
        this.completed = true;
    }
}

module.exports = Task;
