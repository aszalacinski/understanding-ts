// const person: {
//     name: string;
//     age: number;
// } = {
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: 'Aarron',
    age: 44,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}