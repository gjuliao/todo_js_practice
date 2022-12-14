import Task from "./taskClass.js";
import Store from "./storeClass.js";
    
const form = document.getElementById('task_form');
const input = document.getElementById('task_input');
const ul = document.getElementById('task_list');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let description = input.value;
    UI.newTask(description);
    input.value = '';
})

export default class UI {
    static displayTask = (tasks) => {
        tasks = Store.getLocalStorage('tasks');

        ul.innerHTML = '';

        tasks.forEach((el) => {
            let element = document.createElement('li');
            element.innerText = el.description + ' ' + el.index;
            ul.appendChild(element);
        })
    }

    static newTask = (description) => {
        let tasks = Store.getLocalStorage('tasks');
        let index = tasks.length;
        
        const task = new Task(index, description);
        tasks.push(task);
        UI.displayTask(tasks);
        
       Store.saveTaskLocalStorage(tasks);
    }
}

document.addEventListener('onload', UI.displayTask('tasks'));