type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}

// 验证只读属性
interface Todo {
    title: string;
}

const todo: Readonly<Todo> = {
    title: "Delete inactive users"
}

todo.title = "Hello"


// Todo -->

// interface Todo {
//     readonly title: string;
// }




// js 中的实现方式
function readonly(obj) {
    const result = {}

    for (const key in obj) {
        result["readonly" + key] = obj[key]
    }

    return result;
}


// 1. 返回一个对象
// 2. 遍历 obj (js 对象 ts 接口)
// 3. 加上 readonly 关键字
// 4. 通过 key 来获取 obj(接口) 里面的值
