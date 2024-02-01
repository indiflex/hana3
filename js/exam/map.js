const hrTeam = { id: 1, dname: '인사팀' };
const devTeam = { id: 2, dname: '개발팀' };
const depts = [hrTeam, devTeam];

const hong = { id: 1, name: 'Hong', dept: 1 };
const kim = { id: 2, name: 'Kim', dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: 'Park', dept: 2 },
  { id: 4, name: 'Choi', dept: 2 },
];

// [ [1, hrTeam], [2, devTeam] ]
const deptMap = new Map(depts.map(dept => [dept.id, dept]));
console.log('🚀  deptMap:', deptMap);

const empMap = new Map(emps.map(emp => [emp.id, emp]));
console.log('🚀  empMap:', empMap);

// [emp, dept]
const empDept = new Map();
const xx = emps.map(emp => [
  { id: emp.id, name: emp.name },
  deptMap.get(emp.dept),
]);

const yy = emps.map(({ id, name, dept }) => [{ id, name }, deptMap.get(dept)]);
console.log('🚀  yy:', yy);
