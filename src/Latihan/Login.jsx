import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika untuk proses login dapat ditambahkan di sini
        console.log("Username:", username);
        console.log("Password:", password);

        // Mengarahkan ke halaman Todolist setelah login
        navigate('/todolist');
    };

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
                flexDirection: "column"
            }}>
                <h1>Form Login</h1>
                <form onSubmit={handleSubmit} style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    width: "300px"
                }}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{
                            padding: "1rem",
                            fontSize: "1rem",
                            color: "black", 
                            backgroundColor: "white",
                            borderRadius: "100px"
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            padding: "1rem",
                            fontSize: "1rem",
                            color: "black", 
                            backgroundColor: "white",
                            borderRadius: "100px"
                        }}
                    />
                    <button type="submit" style={{
                        padding: "0.5rem",
                        fontSize: "1rem",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "100px"
                    }}>
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;
