import { AcademicFaculty } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { academicFacultyFilterableFields } from './academicFaculty.constants';
import { AcademicFacultyService } from './academicFaculty.service';

//! Create
const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.insertIntoDB(req.body);
  sendResponse<AcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty created',
    data: result,
  });
});

//! Get All
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicFacultyFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await AcademicFacultyService.getAllFromDB(
    filters,
    paginationOptions
  );
  sendResponse<AcademicFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty retrieved successful',
    meta: result.meta,
    data: result.data,
  });
});

//! Get Single by id
const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicFacultyService.getByIdFromDB(id);
  sendResponse<AcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrieved Academic faculty by id successful',
    data: result,
  });
});
//! Update

//! Delete

export const AcademicFacultyController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
};
