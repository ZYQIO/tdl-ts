type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}


// 对比学习法
// js --> ts
function MyPick(todo, keys) {

    const obj = {}

    keys.forEach(key => {
        if (key in todo) {
            obj[key] = key
        }
    })

    return obj;
}

// 总结实现过程:
// 1. 返回一个对象
// 2. 遍历 forEach mapped
// - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
// 3. todo[key] 取值 indexed
// - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
// 4. 看看 key 在不在 todo 里面
//      1. keyof lookup
// - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content

// extends 类型约束
// - https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints

