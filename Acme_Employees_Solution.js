const employees = [
    { id: 1, name: 'moe'},
    { id: 2, name: 'larry', managerId: 1},
    { id: 4, name: 'shep', managerId: 2},
    { id: 3, name: 'curly', managerId: 1},
    { id: 5, name: 'groucho', managerId: 3},
    { id: 6, name: 'harpo', managerId: 5},
    { id: 8, name: 'shep Jr.', managerId: 4},
    { id: 99, name: 'lucy', managerId: 1}
  ];

const findEmployeeByName = (name, employees) => {
    return employees.find(elem => elem.name === name)
}
// console.log(findEmployeeByName('larry', employees));//{ id: 1, name: 'moe' }

const findManagerFor = (employeeName, employees) => {
    return employees.find(elem => elem.name === employeeName)
}
console.log(findManagerFor(findEmployeeByName('shep Jr.', employees), employees));//{ id: 4, name: 'shep', managerId: 2 }

// const findCoworkersFor = (employeeName, employees) => {

// }

// const findManagementChain = (employeeName, employees) => {

// }

// const generateManagementTree = (employeeName) => {

// }