//boolean
let flag: boolean = true;
console.log("Value assigned to flag is: "+flag);

//string
let s1: string = "abc";
console.log("String s1 is: "+s1);

//number
let n1: number = 10;
console.log("Number n1 is: "+n1);

//arrays
let list: number[] = [1,2,3];
for(let i=0; i<list.length; i++)
{
    console.log("The value at position "+(i+1)+ " is " +list[i]);
}

let list2:Array<number>=[1,2,3];
list2.forEach((item)=>
{
    console.log("The value is")
});

//enum
//enum stuff{pen, apple, shoes};
//console.log("")

//any
let unknown:any = "Anything";
console.log("The value of unknown is: "+unknown);