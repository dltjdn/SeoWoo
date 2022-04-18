/*
Interface
*/
interface ServerPart {
    name: string;
    age: number;
    group: string;
    mbti: string[];
}

const serverPart: ServerPart =  {
    name: '이서우',
    age: 24,
    group: 'YB',
    mbti: ['ENFJ', 'INFJ']
}
console.log(serverPart);

const serverMembers: ServerPart[] = [  //ServerPart[]대신 Array<ServerPart>도 가능
    {
        name: '남주혁',
        age: 29,
        group: 'YB',
        mbti: ['INFJ']

    },
    {
        name: '김태리',
        age: 33,
        group: 'YB',
        mbti: ['ENFP', 'INTJ']

    },
]


/*
선택적 프로퍼티
*/
interface Closet {
    name: string;
    shirts: number;
    pants: number;
    hat?: number;
    sunglass?: number;
}

const closet: Closet[] = [ // Closet[]대신 Array<Closet>도 사용 가능
    {
        name:'효정',
        shirts:2,
        pants:4,
        hat:4
    },
    {
        name:'아린',
        shirts:2,
        pants:3,
        sunglass:2
    },
]
