// routes/AppRoutes.js
import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import PokemonDetail from "../pages/PokemonDetail";
import LoginPages from "../pages/LoginPages"; // Import halaman login
import { useLogin } from '../context/LoginContext'; // Import context login

export default function AppRoutes() {
    const { isAuthenticated } = useLogin(); // Ambil status login

    return (
        <Routes>
            <Route path="/login" element={<LoginPages />} />
            <Route
                path="/"
                element={
                    isAuthenticated ? <MainLayout /> : <Navigate to="/login" />
                }>
                <Route index element={<Home />} />
                <Route path="pokemon" element={<Pokemon />} />
                <Route path="pokemon/:id" element={<PokemonDetail />} />
            </Route>
        </Routes>
    );
}
