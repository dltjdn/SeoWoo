/*
기본적인 타입 표현
*/
// let name: string = '이서우';
// console.log(name);

let grade: number = 4;

//let isDeleted: boolean = 'false'; 오류

const sum = (x: number, y: number):number => {
    return x*y;
}


/*
배열 타입 표현 두가지
*/
//const ages: number[] = [1,2,3,4,5];
const ages: Array<number> = [1,2,3,4];

//const strArray: string[] = ["hi", "hello"];
const strArray: Array<string> = ["hi", "hello"];


/*
Object vs object
*/
const f1 = (obj: object):void => {
    console.log(obj);
}

const f2 = (obj: Object):void => {
    console.log(obj);
}

f2([1,2,3,4]);
f2('hihi');

f1([1,2,3,4]);
//f1('hihi'); 오류(object는 원시타입을 제외한 나머지를 받을 수 있다)


const div = (x: number, y: number): number => {
    return x/y;
}

const str = (x: number, y: number): string[] => {
    return ['hello'];
}

/*
null,undefined
*/
let p: null = null;
let u: undefined = undefined;


/*
타입 단언
*/
// angle-bracket 타입 단언
let name3: any = '이서우'
let name3Length: number = (<string>name3).length;
console.log(name3Length);

//as 
let name4: any = '서버';
let name4Length: number = (name4 as string).length;
console.log(name4Length);

