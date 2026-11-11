const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier && multiplier > 0) {
    return value * multiplier;
  } else if (multiplier == 0) {
    return value * 0;
  }
  return value * 2;
};

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

const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const [lat, long, area] = coordinate;
  return `Location: ${area} (${lat} ${long})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

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

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
};
