export const studentSemesterPaymentFilterableFields: string[] = [
  'academicSemesterId',
  'studentId',
];

export const studentSemesterPaymentSearchableFields: string[] = [];

export const studentSemesterPaymentRelationalFields: string[] = [
  'academicSemesterId',
  'studentId',
];
export const studentSemesterPaymentRelationalFieldsMapper: {
  [key: string]: string;
} = {
  academicSemesterId: 'academicSemester',
  studentId: 'student',
};
export const EVENT_STUDENT_SEMESTER_PAYMENT_CREATED =
  'student-semester-payment.created';
export const EVENT_STUDENT_SEMESTER_PAYMENT_UPDATED =
  'student-semester-payment.updated';
export const EVENT_STUDENT_SEMESTER_PAYMENT_DELETED =
  'student-semester-payment.deleted';
