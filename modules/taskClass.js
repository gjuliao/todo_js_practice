export default class Task {
    constructor(index = 0, description, completed){
        this.index = index;
        this.description = description;
        this.completed = completed;
    }
}