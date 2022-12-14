import UI from "./uiClass.js";

export default class Store {
    static saveTaskLocalStorage = (tasks) => {
       localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static getLocalStorage = () => {
       let tasks = localStorage.getItem('tasks');
       if(tasks) {
        tasks = JSON.parse(tasks);
        return tasks;
       }
       return [];
    }

    static removeItem(index) {
        let tasks = this.getLocalStorage();
        tasks.splice(index, 1);
        tasks.forEach((el, index) => {el.index = index});
        this.saveTaskLocalStorage(tasks);
        UI.displayTask(tasks)
    }

    static editItem(description, index) {
        let tasks = this.getLocalStorage();
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].index == index) {
                tasks[i].description = description;
                this.saveTaskLocalStorage(tasks);
                return;
            }
        }
    }

    static toggleComplete(index) {
        let tasks = this.getLocalStorage();
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].index == index) {
                tasks[i].complete = !tasks[i].complete;
                this.saveTaskLocalStorage(tasks);
               
            }
        }
    }

    static clearAll(){
        let tasks = this.getLocalStorage();
        let result = tasks.filter(el => el.complete !== true);
        this.saveTaskLocalStorage(result);
        UI.displayTask(result);
    }

}

