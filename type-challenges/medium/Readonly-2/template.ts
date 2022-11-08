type MyReadonly2<T, K extends keyof T = keyof T> = MyOmit<T, K> & {
    readonly [P in K]: T[P]
}


// 知识点 
// 联合类型 & 

// 举例: 
interface Todo1 {
    completed: boolean
}

interface Todo2 {
    readonly title: string
    readonly description?: string
    readonly completed: boolean
}

type t12 = Todo1 & Todo2

let info: t12 = {
    title: '123',
    description: 'sdfsdf',
    completed: false
}

info.title = '456'
info.description = '456'
info.completed = true
