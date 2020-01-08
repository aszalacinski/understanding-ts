interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = { name: 'Aarron', age: 40, greet: (phrase: string) => console.log(phrase) };

user1.greet(`Hi there, I am ${user1.name}`);