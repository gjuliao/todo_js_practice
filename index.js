import Task from "./modules/taskClass.js";
import UI from "./modules/uiClass.js";
import Store from "./modules/storeClass.js"

const clearAllBtn = document.getElementById("clear_all");
clearAllBtn.addEventListener("click", () => {
    Store.getLocalStorage();
    Store.clearAll();
});