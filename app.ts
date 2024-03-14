////   OBJECT IN TYPESCRIPT   ////

// typescript me object ek data type he jw kisi bhi javascript object kw represent krta he.. //

// object mein key-value pairs hote hain, jaise { key: value } //

let car = {
    make : "toyota",
    model : "corolla",
    year : 2022
};

console.log(car.make);

//  nested object //

let person = {
    fullName : "Ghulam Mustafa",
    age : 21,
    address : {
        street : "123 main street",
        city : "karachi",
        country : "pakistan",
    }
};

console.log(person.address.country);

// object mein array b use hoskta he //

let student = {
    name : "ausaf",
    age : 18,
    rollNo : 123,
    subjects : ['urdu', 'islamiat', 'math'],
    isPassed : true
};

console.log(student.name);
console.log(student.age);
console.log(student.isPassed);
console.log(student.subjects[2]);

// Interface object type //

interface product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

let laptop: product = {
    id: 1,
    name: "hp pavilion",
    price: 40000,
    inStock: true,
};

console.log(laptop.inStock);
console.log(laptop['name']);

// Aliased object type //

type Employee = {
    id: number;
    name: string;
    department: string;
    salary: number;
};

let employeeList: Employee[] = [
    { id: 1, name: "ahmed", department: "HR", salary: 50000 },
    { id: 2, name: "ali", department: "Finance", salary: 60000 },
    { id: 3, name: "Babar", department: "IT", salary: 70000 }
];

console.log(employeeList[2]);
console.log(employeeList);



