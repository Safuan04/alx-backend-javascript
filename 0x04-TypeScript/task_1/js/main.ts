interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}}`
};

interface classInterface {
  firstName: string,
  lastName: string,
  workOnHomework: () => string,
  displayName: () => string,
}

 interface classConstructor {
  new (firstName: string, lastName: string): classInterface;
  // ensuring that any instance created using such a constructor conforms
  // to the expected shape defined by classInterface
}

class StudentClass implements classInterface{
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return `${this.firstName}`;
  }
}
