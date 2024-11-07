import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
// import App from './App.jsx';
// import Layout from './Latihan/Layout.jsx';
// import Gallery from './Latihan/Gallery.jsx';
// import Cases from './Latihan/Cases.jsx';
// import Login from './Latihan/Login.jsx';
// import TodoList from './Latihan/Todolist.jsx';
// import ShoppingCart from './Latihan/ShoppingCart.jsx';
// import Done from './Latihan/done.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Latihan />} />
          <Route index element={<App />} />
          <Route index element={<Gallery />} />
          <Route path="cases" element={<Cases />} />
          <Route path="login" element={<Login />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/done" element={<Done />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>

    {/* <App /> */}
  </StrictMode>
)
