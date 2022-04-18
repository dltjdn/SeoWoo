/*
비동기 처리 방식 - 콜백함수
*/
// console.log('안녕하세여');

// setTimeout( () => {
//     console.log('set time out');
// }, 2000);

// console.log('끝');



/*
비동기 처리 방식 - Promise
 */
// const condition: boolean = false;
// const promise = new Promise((resolve, reject) => {
//     if(condition){
//         resolve('성공');
//     }
//     else{
//         reject(new Error('reject error!'));
//     }
// });

// promise
//     .then((resolveData): void => {
//         console.log(resolveData);
//     })
//     .catch(error => console.log(error));



/*
Promise Chaining 예시
*/
// const restaurant = (callback: () => void, time: number) => {
//     setTimeout(callback,time);
// }

// const order = (): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         restaurant(() => {
//             console.log('[레스토랑 진행 상황 - 음식주문]');
//             resolve(`음식 주문 시작`);
//         }, 1000);
//     })
// }

// const cook = (progress: string): Promise<string> =>{
//     return new Promise((resolve, rejet) => {
//         restaurant(() => {
//             console.log('[레스토랑 진행 상황 - 음식 조리 중 ]');
//             resolve(`${progress} -> 음식 조리 중`);
//         }, 2000);
//     })
// }

// const serving = (progress: string): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         restaurant( () => {
//             console.log('[레스토랑 진행 상황 - 음식 서빙 중]');
//             resolve(`${progress} -> 음식 서빙 중`);
//         },2500)  
//     });
// }

// const eat = (progress: string): Promise<string> => {
//     return new Promise( (resolve, reject) => {
//         restaurant( () => {
//             console.log('[레스토랑 진행 상황 - 음식먹는 중]');
//             resolve(`${progress} -> 음식 먹는 중`);
//         },3000);
//     })
// }

// order()
//     .then(progress => cook(progress))
//     .then(progress => serving(progress))
//     .then(progress => eat(progress))
//     .then(progress => console.log(progress));



/*
Promise에서 바로 resolve 가능
Promise가 여러개여도 catch는 하나만 사용하면 됨!
 */
// Promise.resolve(123)
//     .then(res => {
//         throw new Error('에러 발생');
//         return 456;
//     })
//     .then(res => {
//         console.log(res); // 절대 실행되지 않음
//         return Promise.resolve(789);
//     })
//     .catch(error => {
//         console.log(error.message);
//     });



/*
비동기 처리 방식 - async/await
 */

// asnycFunc1, asyncFunc2는 함수명-인자 string Promise<string>반환
let asyncFunc1 = (msg: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`asyncFun1 - ${msg}`);
        },2000);
    })
}

let asyncFunc2 = (msg: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`asyncFun2 - ${msg}`);
        },1500);
    });
}

// Promise 사용
let promiseMain1 = (): void => {
    asyncFunc1(`server part`).then((result: string) => {
        console.log(result);
        return asyncFunc2('이서우');
    }).then((result: string) => {
        console.log(result);
    });
}
//promiseMain1();

// async/await 사용
const asyncMain = async () => {
    let result = await asyncFunc1(`server part`);
    console.log(result);
    result = await asyncFunc2(`이서우`);
    console.log(result);
}

asyncMain();