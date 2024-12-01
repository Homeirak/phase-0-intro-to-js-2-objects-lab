
// Write your solution in this file!

const employee ={
  name: "Sam",
  streetAdress: "11 Broadway"
};

console.log("Employee:","\n", (employee));

//FUNCTION 1: Nondestructively add key and value:
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };

  newEmployee[key] = value;

  return newEmployee;
}

//FUNCTION 2: Destructively Update Employee with key and value:
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value; 

  return employee;
}

//FUNCTION 3: Nondestructively Delete from Employee by Key:
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = {...employee};
  
  delete newEmployee[key]; //= delete newEmployee.key gave "AssertionError: expected true to equal undefined"

    return newEmployee;
}

//FUNCTION 4: Destructively Delete from Employee by Key:
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  
  delete employee[key]; //= delete newEmployee.key gave "AssertionError: expected true to equal undefined"

  return employee;

}

//last two functions weren't passing; had to use bracket instead of dot notation
//'delete newEmployee[key]' instead of 'delete employee.key'