const test = require("node:test");
const assert = require("node:assert/strict");

const {
    createTask,
    addTask,
    listTasks,
    findTask,
    completeTask,
    deleteTask
} = require("./tasks.js");

test("createTask creates a valid task", () => {
    const task = createTask(1, "Learn JavaScript");

    assert.deepStrictEqual(task, {
        id: 1,
        title: "Learn JavaScript",
        completed: false
    });
});

test("Reject an invalid ID", () => {
    const task = createTask(-1, "Learn JavaScript");
    
    assert.strictEqual(task,undefined)
})

test("Reject an empty title", () => {
    const task = createTask(1, "");

    assert.strictEqual(task, undefined)
})

test("Prevent duplicate IDs", () => {
    const tasks = [];
    const task1 = createTask(1, "First Task");
    const task2 = createTask(1, "Duplicate Task");
    
    addTask(tasks, task1);
    const dupe = addTask(tasks, task2);

    assert.strictEqual(dupe.success, false)

    assert.deepStrictEqual(tasks, [
        {id: 1, title: "First Task", completed: false}
    ]);
});

test("Complete a task", () => {
    const tasks = [];
    const task1 = createTask(1, "First Task");
    addTask(tasks, task1);

    completeTask(tasks, 1);

    assert.strictEqual(tasks[0].completed, true);
});

test("Delete a non-existent task", () => {
    const tasks = [];
    const task1 = createTask(1, "First Task");
    addTask(tasks, task1);

    const result = deleteTask(tasks, 2);

    assert.strictEqual(result, false);
    assert.deepStrictEqual(tasks, [
        {id: 1, title: "First Task", completed: false}
    ]);
});

test("Trim whitespace from task title", () => {
    const task = createTask(1, "    potato    ");
    
    assert.strictEqual(task.title, "potato");
});

test("Find a task by ID", () => {
    const tasks = [];
    const task1 = createTask(1, "First Task");
    addTask(tasks, task1);

    const foundTask = findTask(tasks, 1);

    assert.deepStrictEqual(foundTask, {id: 1, title: "First Task", completed: false});
});

test("Delete an existing task", () => {
    const tasks = [];
    const task1 = createTask(1, "First Task");
    const task2 = createTask(2, "Second Task");
    const task3 = createTask(3, "Third Task");
    addTask(tasks, task1);
    addTask(tasks, task2);
    addTask(tasks, task3);

    const result = deleteTask(tasks, 2);

    assert.strictEqual(result, true);
    assert.deepStrictEqual(tasks, [
        {id: 1, title: "First Task", completed: false},
        {id: 3, title: "Third Task", completed: false}
    ]);
});

test("Complete a non-existent task", () => {
    const tasks = [];
    const task1 = createTask(1, "First Task");
    addTask(tasks, task1);

    const result = completeTask(tasks, 2);

    assert.strictEqual(result, undefined);
    assert.deepStrictEqual(tasks, [
        {id: 1, title: "First Task", completed: false}
    ]);
});