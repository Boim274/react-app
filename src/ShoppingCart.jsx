import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const navigate = useNavigate();

    const addItem = () => {
        if (newItem.trim() && newPrice.trim()) {
            setItems([...items, { name: newItem, price: parseFloat(newPrice) }]);
            setNewItem('');
            setNewPrice('');
        }
    };

    const deleteItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const editItem = (index) => {
        const itemToEdit = items[index];
        setNewItem(itemToEdit.name);
        setNewPrice(itemToEdit.price);
        deleteItem(index);
    };

    const getTotalPrice = () => {
        return items.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    const goToDone = () => {
        navigate('/done');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Shopping Cart</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    style={styles.input}
                />
                <button onClick={addItem} style={styles.addButton}>Add Item</button>
            </div>

            <ul style={styles.list}>
                {items.map((item, index) => (
                    <li key={index} style={styles.listItem}>
                        <span style={styles.itemName}>{item.name}</span>
                        <span style={styles.itemPrice}>${item.price.toFixed(2)}</span>
                        <div style={styles.buttonGroup}>
                            <button onClick={() => editItem(index)} style={styles.editButton}>Edit</button>
                            <button onClick={() => deleteItem(index)} style={styles.deleteButton}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>

            <h2 style={styles.total}>Total Price: ${getTotalPrice()}</h2>

            <button onClick={goToDone} style={styles.nextButton}>Next</button>
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    title: {
        textAlign: "center",
        color: "#333",
        fontSize: "24px",
        marginBottom: "20px",
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
        border: "1px solid #ddd",
        fontSize: "16px",
    },
    addButton: {
        padding: "10px 20px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "5px",
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
        padding: "10px 15px",
        backgroundColor: "#fff",
        borderRadius: "5px",
        marginBottom: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    itemName: {
        flex: 1,
        fontSize: "16px",
        color: "#333",
    },
    itemPrice: {
        fontSize: "16px",
        color: "#555",
        marginRight: "20px",
    },
    buttonGroup: {
        display: "flex",
        gap: "5px",
    },
    editButton: {
        backgroundColor: "#ffc107",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        cursor: "pointer",
    },
    deleteButton: {
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        cursor: "pointer",
    },
    total: {
        textAlign: "right",
        fontSize: "18px",
        color: "#333",
        marginTop: "20px",
    },
    nextButton: {
        display: "block",
        width: "100%",
        padding: "12px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        marginTop: "20px",
    },
};

export default ShoppingCart;
