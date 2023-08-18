import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes,
  },
  // {
  //   path: '/academic-faculties',
  //   route: academicFacultyRoutes
  // },
  // {
  //   path: '/academic-departments',
  //   route: academicDepartmentRoutes
  // },
  // {
  //   path: '/faculties',
  //   route: facultyRoutes
  // },
  // {
  //   path: '/students',
  //   route: studentRoutes
  // },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
