// Type
function greeter(person) {
    return 'Hello, ' + person;
}
var user = 'Violet';
// let user = [0, 1, 2]
greeter(user);
function hello(person) {
    return 'Hello, ' + person.firstLover + ' ' + person.lastLover;
}
var lover = {
    firstLover: 'Violet',
    lastLover: 'Lily'
};
console.log(hello(lover));
