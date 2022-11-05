// 1. extends 类型条件判断
// type First<T extends any[]> = T extends [] ? never : T[0]

// 2. 获取 tuple 的 length 属性
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

// // 3. extends union 判断的规则
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// type args = [1, 2, 3]
// // union --> type t1 = 3 | 1 | 2
// type t1 = args[number]

//  4. inter 的使用
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never

// --> 扩展知识, 怎么获取剩余参数 ?

type Tail<T extends any[]> = T extends [infer First, ...infer Rest] ? Rest : never

type t3 = Tail<[1, 2, 3]> // --> type t3 = [2, 3]


// js 实现
const first = (arr) => {
    if (arr.length === 0) return "never"
    return arr[0];
}

// 知识点
// 1. extends 类型条件判断
// 2. 获取 tuple 的 length 属性 indexed
// 3. extends union 判断的规则
// 4. inter 的使用(推断)
