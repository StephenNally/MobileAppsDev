function count_spaces(value:string):number{
    return value.length;
}

function no_spaces(value:string):number{
    return value.replace(" "," ").length;
}

function count_both(value:string, spaces?:boolean):number{
    let count:number = 0;
    if(spaces){
        count = value.length;
    }
    else{
        count = value.replace(" "," ").length;
    }
    return count;
}

let count:number = count_spaces("Test 1");
console.log(count);

console.log(count_spaces("Test 1"));

console.log(count_both("test 1", true))

console.log(count_both("test 1"));