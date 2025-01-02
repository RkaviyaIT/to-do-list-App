import React, { useState } from 'react';
import './index.css'; // or './App.css'

const Content = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <main className="p-6 bg-white rounded-lg shadow-lg">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full p-3 mb-4 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Add a new task"
      />
      <button
        onClick={handleAddTask}
        className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Add Task
      </button>

      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-4 my-2 rounded-md shadow-md transition-transform transform ${
              task.completed ? 'bg-gray-100 line-through text-gray-500' : 'bg-white'
            }`}
          >
            <span>{task.text}</span>
            <div>
              <button
                onClick={() => handleComplete(index)}
                className={`px-4 py-2 rounded-md text-white ${
                  task.completed ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="ml-2 px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center p-4 text-gray-500 bg-gray-50 border-t">
      &copy; {year} To-Do App. All Rights Reserved.
    </footer>
  );
};

const Header = () => {
  return (
    <header className="bg-green-500 text-white p-4 text-center text-2xl font-semibold">
      To-Do List
    </header>
  );
};

function App() {
  return (
    <div className="App max-w-lg mx-auto mt-12 bg-gray-50 rounded-lg shadow-xl">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
