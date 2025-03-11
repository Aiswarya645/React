import React, { useState } from 'react';

const Todo = () => {
    const [data, setData] = useState([]);
    const [task, setTask] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editTask, setEditTask] = useState('');

    const handleChange = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task) {
            setData([...data, task]);
            setTask('');
        }
    };

    const handleDelete = (index) => {
        const newData = data.filter((_, i) => i !== index);
        setData(newData);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditTask(data[index]);
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        if (editTask) {
            const updatedData = [...data];
            updatedData[editIndex] = editTask;
            setData(updatedData);
            setEditTask('');
            setEditIndex(null);
        }
    };

    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center">
            <div className="bg-blue-300 rounded-lg w-72 p-4">
                <h4 className="text-red-800 font-bold text-center mb-4">ToDo App</h4>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <input
                        type="text"
                        name="task"
                        placeholder="Enter the task......"
                        className="h-10 rounded-lg p-2 mb-3 w-full"
                        onChange={handleChange}
                        value={task}
                    />
                    <button
                        type="submit"
                        className="h-10 w-20 bg-blue-700 text-white rounded-lg mb-4"
                    >
                        Add
                    </button>
                </form>

                {editIndex !== null && (
                    <form onSubmit={handleUpdate} className="flex flex-col items-center mb-4">
                        <input
                            type="text"
                            value={editTask}
                            onChange={(e) => setEditTask(e.target.value)}
                            className="h-10 rounded-lg p-2 mb-3 w-full"
                        />
                        <button
                            type="submit"
                            className="h-10 w-20 bg-green-700 text-white rounded-lg flex"
                        >
                            Update
                        </button>
                    </form>
                )}

                <ul className="text-black flex  flex-col justify-center ">
                    {data.map((item, index) => (
                        <li key={index} className="bg-white p-2 mb-2 rounded-lg w-29 flex text-center">
                            {item}
                            <button onClick={() => handleDelete(index)} className="h-8 bg-cyan-400 text-white px-2 rounded-lg mr-2">delete</button>
                            <button onClick={() => handleEdit(index)} className="h-8 bg-lime-700 text-white px-2 rounded-lg mr-2">Update</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo;
