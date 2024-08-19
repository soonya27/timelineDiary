import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './pages/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Bookmark from './pages/Bookmark';
import NotFound from './pages/NotFound';
import New from './pages/New';
import { ModalContextProvider } from './context/ModalContext';
import AuthContextProvider from './context/AuthContext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/calendar", element: <Calendar /> },
      { path: "/bookmark", element: <Bookmark /> },
      { path: "/new", element: <New /> },

    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ModalContextProvider>
        <RouterProvider router={router} />
        <div id="portal" />
      </ModalContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
