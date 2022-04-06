/*
var은 재선언 재할당 가능
*/
var variable1 = "var variable";
var variable1 = "new var variable";
console.log("var :", variable1);


/*
 let 재선언 불가
*/
// let variable2 = "let variable";
// let variable2 = "new let variable";
// console.log("let: ", variable2);


/*
let 재할당 가능
*/
let variable2 = "let variable";
variable2 = "new let variable";
console.log("let: ",variable2);


/*
const 재선언 재할당 불가
*/
// const variable3 = "const variable";
// variable3 = "new const variable";
// console.log("const: ", variable3);


/*
var은 function scope
let,const는 block scope
 */
if(true){
    var x = 'var variable';
}
console.log(x);

// if(true){ 오류
//     const y = 'const variable';
// }
// console.log(y);

function foo(){
    if(true){
        var variable = 'hello';
        console.log('if block-', variable);
    }
    console.log('function block- ', variable);
}
//console.log('global-', variable); 오류

