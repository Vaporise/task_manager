console.log("Task Manager started!");

const tasks = []


function createTask(id, title) {
    const task = {
        id: id,
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
    for (const task of tasks){
        if (task.completed === true){
            complete = "Complete";
        } else {
            complete = "Incomplete";
        }
        console.log(`${task.id} - ${task.title} - ${complete}`)
    }
}

listTasks(tasks);