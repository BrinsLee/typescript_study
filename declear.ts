// 变量声明
let a: number = 300;

// 常量声明
const b: number = 400;

//  类型推断
let c = 300;
// console.log(typeof c);

// 常见数据类型
// number 表示数字，包括整数和浮点数
let ac: number = 101;
let bc: number = -96;
let cc: number = 3.14;

// string"
let as: string = "你好，小老弟";
console.log(as);

// boolean
let isOpen: boolean = true;
let isDone:  boolean = false;

// 数组
let n : number[] = [1,3,6,8];
let s : string[] = ["hello", "world"];

// 对象
let employee: object;
employee = {
    firstName: "john",
    lastName: 'Doe',
    age: 25,
    job: 'Web Developer'
};
// 显式定义 employee 对象
let employee2: {
    firstName: string,
    lastName: string,
    age: number,
    job: string
}

employee2 = {
    firstName: 'j',
    lastName: 'b',
    age: 25,
    job: 'ccc'
}

// 定义与声明结合
let person: {name:string, age:number, gender:string} = {name:'张三', age:10,
    gender:'男'};

// 空类型
let va: {} = {};
console.log(va.toString())
