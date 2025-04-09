function getStringLength(strings){
    return strings.map(str => str.length);
}
console.log(getStringLength(["table", "chair", "spoon", "plate"]));


function filterEvenNumbers(numbers){
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([2,4,5,6,7,1,33]));


function getTopStudentNames(students){
    return students.filter(student => student.score >75).map(student => student.name);
}
const studentData = [
    {name: "Vero", score: 85},
    {name: "Mark", score: 70},
    {name: "Edwin", score: 92},
    {name: "Gladys", score:68}
];
console.log(getTopStudentNames(studentData));


function squareNumbers(numbers){
    return numbers.map(num => num*num);
}
console.log(squareNumbers([1,2,3,4,5,6]));


function filterAndUppercaseStrings(mixedArray){
    let mixedArray1= mixedArray.filter(item=> typeof (item) === "string");
    return mixedArray1.map(str=> str.toUppercase());
}
console.log(filterAndUppercaseStrings(["hello", 32, "world", "javascript"]));

