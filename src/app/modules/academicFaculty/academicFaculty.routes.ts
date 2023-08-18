import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.contoller';
import { AcademicFacultyValidation } from './academicFaculty.validation';
const router = express.Router();

router.get('/:id', AcademicFacultyController.getByIdFromDB);
router.get('/', AcademicFacultyController.getAllFromDB);
router.post(
  '/',
  validateRequest(AcademicFacultyValidation.create),
  AcademicFacultyController.insertIntoDB
);
export const AcademicFacultyRoutes = router;
