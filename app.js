console.log("Task Manager started!");

const tasks = [] // Array to hold tasks


function createTask(id, title) {
    const task = {
        id: id, //For now id is created by the input.
        title: title,
        completed: false,
    }
    return task;
}

const task1 = createTask(1, "First Task");
const task2 = createTask(2, "Second Task");
const task3 = createTask(3, "Third Task");

function addTask(tasks, task) { 
    tasks.push(task);
    return tasks;
}

addTask(tasks, task1);
addTask(tasks, task2);
addTask(tasks, task3);

task2.completed = true;

function listTasks(tasks) {
    let complete;
    for (const task of tasks){ //loop through tasks, check if they are completed and display.
        if (task.completed === true){
            complete = "Complete";
        } else {
            complete = "Incomplete";
        }
        console.log(`${task.id} - ${task.title} - ${complete}`)
    }
}

listTasks(tasks);

function findTask(tasks, id) {
    for (const task of tasks) {
        if (task.id === id) {
            return task;
        }
    }
    return undefined;
}

function completeTask(tasks, id) {
    const targetTask = findTask(tasks, id);
    if (targetTask !== undefined) {
        targetTask.completed = true;
        return targetTask;
    } else {
        return undefined;
    }
}

completeTask(tasks, 3);
console.log(tasks);


function deleteTask(tasks, id) {
    
    const targetIndex = tasks.findIndex(task => task.id === id); 
    if (targetIndex !== -1) {
        tasks.splice(targetIndex, 1);
        return true;
    } else {
        return false;
    }
}

console.log(deleteTask(tasks, 3));
console.log(deleteTask(tasks, 99));
console.log(deleteTask(tasks, 3));

listTasks(tasks);