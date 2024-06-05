import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './view/login/Login.layout'
import ResetPassword from './view/login/recover_password/Recover_Password.layout'
import VirtualClassroom from './view/classroom/Virtual_Classroom'
import AttendanceRecord from './view/classroom/attendance/AttendanceRecord.page'

import CourseDetails from './view/classroom/course/course_details/CourseDetails.layout'
import Course from './view/classroom/course/Course.page'
import CourseResources1 from './view/classroom/course/course_details/semestre-1/CourseResources-1.page'
import Schedule from './view/classroom/Schedule/Schedule.page'
import Test from './view/classroom/test/Test.page'

//Rrutas 
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
        path: "/crayon/",
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
    path: '/crayon/cursos/detalles/',
    element: <CourseDetails />,
    children: [
      {
        path: '/crayon/cursos/detalles/semestre-1/',
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
