const {
    createTask, 
    addTask, 
    listTasks, 
    findTask, 
    completeTask, 
    deleteTask 
} = require("./tasks.js");


console.log("Task Manager started!");

const tasks = [];

// Create tasks
const task1 = createTask(1, "First Task");
const task2 = createTask(2, "Second Task");
const task3 = createTask(3, "Third Task");

// Add tasks to the array
addTask(tasks, task1);
addTask(tasks, task2);
addTask(tasks, task3);

// Display all tasks
console.log("\nOriginal tasks:");
listTasks(tasks);

// Complete task 2
completeTask(tasks, 2);

console.log("\nAfter completing task 2:");
listTasks(tasks);

// Find task 3
console.log("\nFinding task 3:");
console.log(findTask(tasks, 3));

// Delete task 1
deleteTask(tasks, 1);

console.log("\nAfter deleting task 1:");
listTasks(tasks);


