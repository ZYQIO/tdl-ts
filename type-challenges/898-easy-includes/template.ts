import type { Equal } from '@type-challenges/utils'


export type Includes<T extends readonly any[], U> = T extends [
    infer First, ...infer Rest
] ? Equal<First, U> extends true ? true : Includes<Rest, U> : false


// js 实现

// function Includes(list, key) {
//     for (let i = 0; i < list.length; i++) {
//         const element = list[i];
//         if(element === key) {
//             return true
//         }
//     }

//     return false
// }

function Includes(list, key) {
    function dfs(list, key) {
        if (list.length === 0) return false;

        const [first, ...rest] = list;

        if (first === key) {
            return true;
        } else {
            dfs(rest, key)
        }
    }

    return dfs(list, key)
}

// 知识点
// 1. 用递归实现遍历数组
// 2. ts 的模块规范
//     - 如果有 export/import 的话, 那么就是模块
//     - 没有的话, 就是全局, 可以直接在别的模块中引用