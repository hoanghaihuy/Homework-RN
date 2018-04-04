// 1
const images = [
    { height: 10, width: 20 },
    { height: 20, width: 30 },
    { height: 30, width: 40 }
];

const areas = [];
const area = 0;

images.forEach((image) => {
    area = image.height * image.width;
    areas.push(area);
});

console.log(areas);

// 2
const team = [
    { name: 'A', class: '12A' },
    { name: 'B', class: '12B' },
    { name: 'C', class: '12C' },
];

const pluck = (array, prop) => {
    return array.map((props) => { return props[prop] });
};

pluck(team, 'name');

// 3
const users = [
    { id: 1, admin: true },
    { id: 2, admin: true },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true }
];

const filteredUser = users.filter((user) => {
    return user.admin === true
})

// 4
const numbers = [
  { id: 3, name: 'A', price: 100 },
  { id: 2, name: 'B', price: 300 },
  { id: 5, name: 'C', price: 150 },
  { id: 1, name: 'D', price: 200 }
]

numbers.sort((a, b) => { return a.price - b.price });

// 5
const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
const min = Math.min(...arr)
console.log(min)