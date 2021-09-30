
const people = [ 
    {name: 'Sandra', age: 18}, 
    {name: 'Erin', age: 28}, 
    {name: 'Carl', age: 42}, 
    {name: 'Lloyd', age: 12}, 
    {name: 'Samuel', age: 31}, 
    {name: 'William', age: 65}, 
    {name: 'Ric', age: 53}, 
    {name: 'Mick', age: 12}, 
    {name: 'Ludwig', age: 74},
    {name: 'Hilaire', age: 10}, 
    {name: 'Menachem', age: 4}, 
    {name: 'Saul', age: 52}, 
    {name: 'Robert', age: 65}, 
    {name: 'Blair', age: 12}, 
    {name: 'Robert', age: 81}, 
    {name: 'Peter', age: 69}
];
people.forEach(item => console.log(item));
people.forEach(item => console.log(item.name));
const children = people.filter((item) => item.age < 18);
const oldPeople = people.filter((item) => item.age >= 18);
const futurePeople = people.map((item) =>({age: item.age + 30}))
const deadPeople = people.map((item) => {
    if(item.age > 100) {
        return { isDead: true }
    }
    if(item.age < 100) {
        return {isDead: false}
}
})
const averageAge =
  people.reduce((acc, val) => acc + val.age, 0) / people.length;

console.log(averageAge);
