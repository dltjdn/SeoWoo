/*
Primitive Type
*/
const name = "이서우";
console.log(typeof  name);

let age = 24;
console.log(typeof age);

let server = true;
console.log(typeof server);


/*
Template literal
*/
console.log("안녕하세요 제 이름은" + name + "입니다. 제 나이는 " + age + "살 입니다.");
console.log(`안녕하세요 제 이름은 ${name}입니다. 제 나이는 ${age}살 입니다`);

/*
배열 요소의 타입이 고정돼 있지 않아
같은 배열 내에 여러 타입 요소들이 같이 있을 수 있음
*/
let arr = ["안녕", 1, "나는", true];


/*
Array.map()
*/
let num = [1,2,3,4];
const newNumArr = num.map(x => x*2);
console.log(newNumArr);

/*
순회하기 위해 (1) map (2)for
*/
newNumArr.map(x => {
    console.log(x);
})

for(const x of newNumArr){
    console.log(x);
}


/*
자바스크립트 버그 : typeof null -> object
null 검사할때는 === 이용
*/
console.log(typeof null);
console.log(typeof undefined);