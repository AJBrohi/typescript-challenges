// 1
const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier && multiplier > 0) {
    return value * multiplier;
  } else if (multiplier == 0) {
    return value * 0;
  }
  return value * 2;
};

// 2
const processInput = (
  value: number | string | boolean,
): number | string | boolean => {
  if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  return value ? "Activate" : "Inactivate";
};

// 3
const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const [lat, long, area] = coordinate;
  return `Location: ${area} (${lat} ${long})`;
};

// 4
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

// 5
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (array: Course[], minStudents: number): Course[] => {
  return array.filter(
    (item) => item.isPublished && item.students >= minStudents,
  );
};

// 6
