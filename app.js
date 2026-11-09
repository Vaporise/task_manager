console.log("Task Manager started!");

const tasks = [] // Array to hold tasks


function createTask(id, title) {

    if (Number.isInteger(id) === false || id < 1) { //check if id is a positive integer
        return undefined;
    }
    if (typeof title !== "string") { //check if title is a string
        return undefined
    } else if (title.trim() === "") { //check if title is empty or whitespace
        return undefined;
    }

    const task = {
        id: id, //For now id is created by the input.
        title: title.trim(),
        completed: false,
    }
    return task;
}

const task1 = createTask(1, "First Task");
const task2 = createTask(2, "Second Task");
const task3 = createTask(3, "Third Task");
const task4 = createTask(4, "     Fourth Task     ");

function addTask(tasks, task) { 
    if (task === undefined) { //check if task is undefined
        return {success: false,tasks:tasks};
    }  else if (findTask(tasks, task.id) !== undefined){ //check if task with same id already exists
        return {success: false,
                tasks:tasks
        };
    } else {
        tasks.push(task);
        return {success : true,
                tasks: tasks
        };
    }

    
}

addTask(tasks, task1);
addTask(tasks, task2);
addTask(tasks, task3);
addTask(tasks, task4);

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


