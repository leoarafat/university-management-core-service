export const semesterRegistrationFilterableFields: string[] = [
  'searchTerm',
  'id',
  'academicSemesterId',
];

export const semesterRegistrationSearchableFields: string[] = [];

export const semesterRegistrationRelationalFields: string[] = [
  'academicSemesterId',
];
export const semesterRegistrationRelationalFieldsMapper: {
  [key: string]: string;
} = {
  academicSemesterId: 'academicSemester',
};
export const EVENT_SEMESTER_REGISTRATION_CREATED =
  'semester-registration.created';
export const EVENT_SEMESTER_REGISTRATION_UPDATED =
  'semester-registration.updated';
export const EVENT_SEMESTER_REGISTRATION_DELETED =
  'semester-registration.deleted';
