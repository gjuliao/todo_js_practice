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
}
