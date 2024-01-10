interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Safuan',
  lastName: 'Elmail',
  age: 26,
  location: 'Tetouan',
}

const student2: Student = {
  firstName: 'Maruan',
  lastName: 'Elmail',
  age: 26,
  location: 'Tetouan',
}

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement("table");
const header = table.createTHead();
const headerRow = header.insertRow();
headerRow.insertCell().textContent = "First Name";
headerRow.insertCell().textContent = "Location";

const tbody = table.createTBody();
studentsList.forEach((student) => {
    const row = tbody.insertRow();
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.location;
});

document.body.appendChild(table);
