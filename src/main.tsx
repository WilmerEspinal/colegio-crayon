import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './layout/Login/Login.layout'
import ResetPassword from './layout/Recover_Password.layout'
import VirtualClassroom from './layout/Virtual_Classroom'
import AttendanceRecord from './pages/AttendanceRecord.page'

import CourseDetails from './layout/CourseDetails.layout'
import Course from './pages/Course/Course.page'
import CourseResources1 from './pages/CourseResources-1.page'
import Schedule from './pages/Schedule.page'
import Test from './pages/Test.page'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/login/recover-password',
    element: <ResetPassword />,
  }
  ,
  {
    path: '/crayon',
    element: <VirtualClassroom />,
    children: [
      {
        path: "/crayon",
        element: <Course />
      },
      {
        path: "/crayon/horario",
        element: <Schedule />
      },
      {
        path: "/crayon/cursos",
        element: <Course />
      },
      {
        path: "/crayon/examenes",
        element: <Test />
      },
      {
        path: "/crayon/asistencia",
        element: <AttendanceRecord />
      },
    ]
  },
  {
    path: '/cursos/detalles',
    element: <CourseDetails />,
    children: [
      {
        path: '/cursos/detalles/semestre-1',
        element: <CourseResources1 />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
