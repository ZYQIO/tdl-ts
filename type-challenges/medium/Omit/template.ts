type MyOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P]
}


// 知识点
// 类型重映射 --> as 语法

