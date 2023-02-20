import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css';
import Kaoru from './components/errorElement/errorElement'
import App from './App';
import Explore from './routes/explore/explore';
import Notifications from './routes/notifications/notifications';
import Messages from './routes/messages';
import Bookmarks from './routes/bookmarks';
import Profile from './routes/profile';

const router =  createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement:<Kaoru/>
  },
  {
    path:'/explore',
    element: <Explore/>
  },
  {
    path:'/notifications',
    element: <Notifications />,
  },
  {
    path:'/messages',
    element: <Messages />,
  },
  {
    path:'/bookmarks',
    element: <Bookmarks />,
  },
  {
    path:'/profile',
    element: <Profile />,
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

