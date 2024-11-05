import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css'
// import App from './App.jsx'
import Layout from './Layout.jsx';
import Gallery from './Gallery.jsx';
import Latihan from './Latihan.jsx';
import Cases from './Cases.jsx';
import Login from './Login.jsx';
import TodoList from './Todolist.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import Done from './done.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Latihan />} /> */}
          {/* <Route index element={<App />} /> */}
          <Route index element={<Gallery />} />
          <Route path="cases" element={<Cases />} />
          <Route path="login" element={<Login />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/done" element={<Done />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
