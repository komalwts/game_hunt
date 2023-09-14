import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Dashboard';
import GamesDeveloper from './GamesDeveloper';
import Tournaments from './Turnaments';
import Games from './Games';
import Login from './Login';



const DashboardComponent = Layout(Dashboard);
const LoginComponent = Layout(Login);
const GamesDeveloperComponent = Layout(GamesDeveloper);
const GamesComponent = Layout(Games);
const TournamentsComponent = Layout(Tournaments);

// passing About component to Layout hoc as a parameter 

const router = createBrowserRouter(
  [
    { path: '/', element: <LoginComponent /> },
    { path: '/dashboard', element: <DashboardComponent /> },
    { path: '/games', element: <GamesComponent /> },
    { path: '/tournaments', element: <TournamentsComponent /> },
    { path: '/gamesDevelopers', element: <GamesDeveloperComponent /> },
  ],
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
