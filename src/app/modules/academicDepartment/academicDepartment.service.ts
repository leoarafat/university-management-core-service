import { AcademicDepartment } from '@prisma/client';
import { prisma } from '../../../shared/prisma';

const insertIntoDB = async (
  payload: AcademicDepartment
): Promise<AcademicDepartment> => {
  const result = await prisma.academicDepartment.create({
    data: payload,
  });
  return result;
};

export const AcademicDepartmentService = {
  insertIntoDB,
};
