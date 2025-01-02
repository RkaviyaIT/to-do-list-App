import React, { useState } from 'react';

const Content = () => {
    // Step 1: State to store the to-do list items
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // Step 2: Handle task input change
    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    // Step 3: Add task to the list
    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { text: newTask, isCompleted: false }]);
            setNewTask(""); // Reset input field after adding
        }
    };

    // Step 4: Handle task delete
    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(updatedTasks);
    };

    // Step 5: Toggle completion of a task
    const handleToggleCompletion = (index) => {
        const updatedTasks = tasks.map((task, taskIndex) =>
            taskIndex === index
                ? { ...task, isCompleted: !task.isCompleted }
                : task
        );
        setTasks(updatedTasks);
    };

    return (
        <main>
            <h2>To-Do List</h2>

            {/* Input field and Add button */}
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={handleInputChange}
                    placeholder="Add a new task"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            {/* Task List */}
            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        style={{
                            textDecoration: task.isCompleted ? 'line-through' : 'none',
                        }}
                    >
                        {task.text}
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                        <button onClick={() => handleToggleCompletion(index)}>
                            {task.isCompleted ? "Undo" : "Complete"}
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Content;
