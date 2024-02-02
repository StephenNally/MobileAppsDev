//boolean
var flag = true;
console.log("Value assigned to flag is: " + flag);
//string
var s1 = "abc";
console.log("String s1 is: " + s1);
//number
var n1 = 10;
console.log("Number n1 is: " + n1);
//arrays
var list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
    console.log("The value at position " + (i + 1) + " is " + list[i]);
}
var list2 = [1, 2, 3];
list2.forEach(function (item) {
    console.log("The value is");
});
//enum
//enum stuff{pen, apple, shoes};
//console.log("")
//any
var unknown = "Anything";
console.log("The value of unknown is: " + unknown);
