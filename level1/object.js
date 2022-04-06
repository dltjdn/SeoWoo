/*
Object
 */
const sopt = {
    season : 30,
    group: ['YB', 'OB'],
    part : ['서버', '기획','디자인','안드로이드', '웹','서버'],
    president : '김규민',
    introduce : function(){
        this.part.map(name => {
            console.log(`솝트 내 파트는 ${name}가 있어요!`)
        } );
    }
}
console.log(sopt.group);
sopt.introduce();
console.log(sopt.season);

/*
Array
*/
let array = [1,true, "string"];
console.log(array);

let array2= [
    {
        name : '이서우',
        나이: 24
    },
    {
        name : '윤지현',
        나이:23
    }
]
console.log(array2);
console.log( typeof array2);

/*
함수 선언식
*/
// function menu(dinner){
//     return `오늘 메뉴는 ${dinner}입니다.`;
// } 
// const str2 = menu("삼겹살");
// console.log(str2);

/*
함수 표현식 
*/
const menu = (dinner) => {
    return `오늘 메뉴는 ${dinner}입니다.`;
}
const str2= menu("곱창");
console.log(str2);


const func = (num) => {
    return num * num;
}
const multiple = (func, num) => {
    console.log(func(num));
}
multiple(func,3);


/*
연산자
*/
//증감 연산자
// let a = 2;
// let b = a++;
// console.log(b);
// console.log(a);

//사칙연산
let a = 2+3;
let x = 5;
let b = 2*3;
let c = 3-2;
let d = 4/2;
console.log(a,b,c,d);

// 비교 연산자
// if(a===x){ // 값과 타입 모두 비교 (권장)
//     console.log('a===x');
// }

// let y = '5';

// if(a===y){ // 값과 타입 모두 비교
//     console.log('a===y');
// }

// if(a==y){
//     console.log('a==y');
// }

if(a != c){
    console.log("a != c");
}

let y = '5';

if(a !== y){ // a와 y는 값은 같지만 type이 다름
    console.log("a !== y");
}

if(b % d == 0){
    console.log("나머지 0");
}

//논리연산자
if(a===5 && d===2){
    console.log('and');
}

if(a===4 || d===2){
    console.log('or');
}

//typeof A
console.log(typeof a);
if(typeof a == 'number'){ //string으로 비교해야함!
    console.log(a);
}
