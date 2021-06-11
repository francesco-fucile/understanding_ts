// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 200] = "READ_ONLY";
    Role[Role["AUTHOR"] = 300] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
