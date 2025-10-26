import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import Text from './__text__/text';
import Layout01 from './layout/Layout01';
import Home from './pages/Home';
import LeaderboardPage from './pages/LeaderboardPage';
import HistoryPage from './pages/HistoryPage';
import Layout02 from './layout/Layout02';
import Register from './pages/Register';
import Index from './pages';
import Login from './pages/Login';
import QuizPage from './pages/QuizPage';
import AdminPage from './pages/AdminPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout02 />,
    children: [
      { index: true, element: <Index /> },
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },
    ],
  },
  {
    path: '/index',
    element: <Layout01 />,
    children: [
      { index: true, element: <Home /> },
      { path: '/index/leaderboard', element: <LeaderboardPage /> },
      { path: '/index/history', element: <HistoryPage /> },
      { path: '/index/quiz/:id', element: <QuizPage /> },
      { path: '/index/admin', element: <AdminPage /> },
    ],
  },
  {
    path: '/text',
    element: <Text />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);