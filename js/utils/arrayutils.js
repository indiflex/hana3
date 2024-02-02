console.log('*****************************');
Object.defineProperties(Array.prototype, {
  first: {
    get: function () {
      return this[0];
    },
  },
  last: {
    get: function () {
      return this[this.length - 1];
      // return this.slice(-1)[0];
    },
  },
});

Array.prototype.uniqBy = function (prop) {
  return [...new Set(this.map(item => item[prop]))];
};
Array.prototype.filterBy = function (prop, value) {
  return this.filter(item => item[prop] === value);
};

Array.prototype.sortBy = function (prop, direction = 'asc') {
  const flag = direction.toLowerCase() === 'asc' ? 1 : -1;

  // return [...this].toSorted((a, b) => (a[prop] > b[prop] ? 1 : -1) * flag);
  return this.toSorted((a, b) => (a[prop] > b[prop] ? 1 : -1) * flag);

  // return this.toSorted((a, b) => {
  //   if (typeof a[prop] === 'string') return a[prop].localeCompare(b[prop]);

  //   return this.toSorted((a, b) => (a[prop] > b[prop] ? 1 : -1) * flag);
  // });
};

Array.prototype.findBy = function (prop, value) {
  return this.find(item => item[prop] === value);
};

// const hong = {
//   id: 1,
//   name: 'Hong',
//   dept: 'HR',
//   isAdm: true,
//   birth: new Date(),
// };

// const d1 = new Date();
// const d2 = d1.setDate(1);
// const kim = {
//   id: 2,
//   name: 'Kim',
//   dept: 'Server',
//   isAdm: true,
//   birth: new Date(),
// };
// const lee = {
//   id: 3,
//   name: 'Lee',
//   dept: 'Front',
//   isAdm: true,
//   birth: d1,
// };
// const park = {
//   id: 4,
//   name: 'Park',
//   dept: 'HR',
//   isAdm: true,
//   birth: d2,
// };
// const ko = {
//   id: 7,
//   name: 'Ko',
//   dept: 'Server',
//   isAdm: false,
//   birth: d1,
// };
// const loon = {
//   id: 6,
//   name: 'Loon',
//   dept: 'Sales',
//   isAdm: false,
//   birth: d2,
// };
// const choi = {
//   id: 5,
//   name: 'Choi',
//   dept: 'Front',
//   isAdm: true,
//   birth: new Date(),
// };
// const users = [hong, kim, lee, park, ko, loon, choi];
// const uniqDepts = users.uniqBy('dept'); // [ 'HR', 'Server', 'Front', 'Sales' ]
// console.log('🚀  uniqDepts:', uniqDepts);

// const hrUsers = users.filterBy('dept', 'HR'); // [ hong, park]
// console.log('🚀  hrUsers:', hrUsers);

// console.log('SortByName>>', users.sortBy('name'));
// // console.log('🚀  users:', users);
// console.log('SortById>>', users.sortBy('id', 'desc'));
// console.log('SortById>>', users.sortBy('id', 'desc'));
// console.log('SortById>>', users.sortBy('birth', 'desc'));
// console.log('SortById>>', users.sortBy('isAdm', 'desc'));

// const choiFound = users.findBy('name', 'Choi'); // [ hong, park]
// console.log('🚀  choiFound:', choiFound);
