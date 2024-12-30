import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './components/Root/index.jsx';
import Home from './components/Home/index.jsx';
import Login from './components/login/index.jsx';
import Register from './components/register/index.jsx';
import UserData from './context/userData/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserData>
      <RouterProvider router={router}></RouterProvider>
    </UserData>
  </StrictMode>
);
