import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { DigitalHuman } from '@/pages/DigitalHuman';
import { Script } from '@/pages/Script';
import { Editing } from '@/pages/Editing';
import { Materials } from '@/pages/Materials';
import { Assistant } from '@/pages/Assistant';
import { Charity } from '@/pages/Charity';
import { Login } from '@/pages/Login';
import { Trial } from '@/pages/Trial';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/digital-human',
        element: <DigitalHuman />,
      },
      {
        path: '/script',
        element: <Script />,
      },
      {
        path: '/editing',
        element: <Editing />,
      },
      {
        path: '/materials',
        element: <Materials />,
      },
      {
        path: '/assistant',
        element: <Assistant />,
      },
      {
        path: '/charity',
        element: <Charity />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/trial',
        element: <Trial />,
      },
    ],
  },
]);