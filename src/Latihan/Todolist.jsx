import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');
    const navigate = useNavigate();

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, newTodo.trim()]);
            setNewTodo('');
        }
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const editTodo = (index) => {
        setEditIndex(index);
        setEditText(todos[index]);
    };

    const saveEdit = () => {
        const updatedTodos = todos.map((todo, index) =>
            index === editIndex ? editText.trim() : todo
        );
        setTodos(updatedTodos);
        setEditIndex(null);
        setEditText('');
    };

    const goToShoppingCart = () => {
        navigate('/shoppingcart');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Todo List</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add new todo"
                    style={styles.input}
                />
                <button onClick={addTodo} style={styles.addButton}>Add</button>
            </div>

            <ul style={styles.list}>
                {todos.map((todo, index) => (
                    <li key={index} style={styles.listItem}>
                        {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    style={styles.editInput}
                                />
                                <button onClick={saveEdit} style={styles.saveButton}>Save</button>
                                <button onClick={() => setEditIndex(null)} style={styles.cancelButton}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <span style={styles.todoText}>{todo}</span>
                                <button onClick={() => editTodo(index)} style={styles.editButton}>Edit</button>
                                <button onClick={() => deleteTodo(index)} style={styles.deleteButton}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>

            <button onClick={goToShoppingCart} style={styles.nextButton}>Next</button>
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        maxWidth: "500px",
        margin: "auto",
        // backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
        textAlign: "center",
        color: "#333",
    },
    inputContainer: {
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
    },
    input: {
        flex: 1,
        padding: "10px",
        borderRadius: "5px",
        fontSize: "16px",
        color: "#333",
        backgroundColor: "white",
        borderRadius: "100px"
    },
    addButton: {
        padding: "10px 20px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "100px",
        cursor: "pointer",
        fontSize: "16px",
    },
    list: {
        listStyleType: "none",
        padding: "0",
    },
    listItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#fff",
        borderRadius: "5px",
        marginBottom: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    todoText: {
        flex: 1,
        color: "#333",
        marginRight: "10px",
    },
    editInput: {
        flex: 1,
        padding: "10px",
        borderRadius: "100px",
        // backgroundColor: "white",
        marginRight: "10px",
    },
    editButton: {
        backgroundColor: "#ffc107",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "100px",
        cursor: "pointer",
        marginLeft: "5px",
    },
    deleteButton: {
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "100px",
        cursor: "pointer",
        marginLeft: "5px",
    },
    saveButton: {
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "100px",
        cursor: "pointer",
    },
    cancelButton: {
        backgroundColor: "#6c757d",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "100px",
        cursor: "pointer",
        marginLeft: "5px",
    },
    nextButton: {
        display: "block",
        width: "100%",
        padding: "10px",
        color: "white",
        border: "none",
        borderRadius: "100px",
        cursor: "pointer",
        fontSize: "16px",
        marginTop: "20px",
    },
};

export default TodoList;
