import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './layout/Login.layout'
import ResetPassword from './layout/Recover_Password.layout'
import VirtualClassroom from './layout/Virtual_Classroom'
import Course from './pages/Course.page'
import Schedule from './pages/Schedule.page'
import Test from './pages/Test.page'


const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/login/recover-password',
    element: <ResetPassword />,
  }
  ,
  {
    path: '/',
    element: <VirtualClassroom />,
    children: [
      {
        path: "/horario",
        element: <Schedule />
      },
      {
        path: "/cursos",
        element: <Course />
      },
      {
        path: "/examenes",
        element: <Test />
      },
      {
        path: "/asistencia",
        element: ""
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
