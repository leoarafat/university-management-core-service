export const offeredCourseSectionFilterableFields: string[] = [
  'searchTerm',
  'id',
  'offeredCourseId',
  'semesterRegistrationId',
];

export const offeredCourseSectionSearchableFields: string[] = [];

export const offeredCourseSectionRelationalFields: string[] = [
  'offeredCourseId',
  'semesterRegistrationId',
];
export const offeredCourseSectionRelationalFieldsMapper: {
  [key: string]: string;
} = {
  offeredCourseId: 'offeredCourse',
  semesterRegistrationId: 'semesterRegistration',
};

export const daysInWeek = [
  'SATURDAY',
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
];
export const EVENT_OFFERED_COURSE_SECTION_CREATED =
  'offered-course-section.created';
export const EVENT_OFFERED_COURSE_SECTION_UPDATED =
  'offered-course-section.updated';
export const EVENT_OFFERED_COURSE_SECTION_DELETED =
  'offered-course-section.deleted';
