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
            element.innerHTML = `
            <input type="text" id="taskItem" class="description" value="${el.description}" />
            <i class="fa-solid fa-trash-can"></i>
            <i class="fa-solid fa-pen-to-square"></i>
            `;
            ul.appendChild(element);
        });

        const removeTask = document.querySelectorAll('.fa-trash-can');
        removeTask.forEach((el, index) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                Store.removeItem(el, index)
            })
        })

        const editTask = document.querySelectorAll('.fa-pen-to-square');
        editTask.forEach((el, index) => {
            const taskItem = document.querySelectorAll('#taskItem');
            el.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(taskItem, index);
                Store.editItem(el.parentElement, index);
        })
        })
    }
    
    static newTask = (description) => {
        let tasks = Store.getLocalStorage('tasks');
        let index = tasks.length;
        
        const task = new Task(index, description);
        tasks.push(task);
        Store.saveTaskLocalStorage(tasks);
        UI.displayTask(tasks);
    }
}

document.addEventListener('onload', UI.displayTask('tasks'));