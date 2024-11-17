// 声明
// let arrayName: type[];

// 声明一个字符串数组
let skills:string[] = []
// 添加元素
skills[0] = 'Problem Sloving'
skills[1] = 'Programming'

// 使用push 添加元素
skills.push('Software Design')
console.log(skills)

// 声明并赋值
let skills2: string[] = ['Problem Sloving', 'Programming', 'Software Design']

// 数组中属性和方法
// 获取数组元素的数量
let series = [1, 2, 3]
console.log(series.length)

// forEach(), map(), reduce(), filter()
let doubleIt = series.map(e => e * 2)
console.log(doubleIt)

// 存储混合类型
let scores = ['Programming', 5, 'Software Design', 4]
// 类型推断为(string | number)[] 类型，相当于
let scores2: (string|number) [];
scores2 = ['Programming', 5, 'Software Design', 4]