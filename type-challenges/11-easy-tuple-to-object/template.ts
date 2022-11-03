type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]: P
}

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type r = TupleToObject<typeof tuple>
// type r = readonly ["0", "1", "2", "3"]

// 结果:
// keyof array 会得到一个索引组成的 数组


// const let --> js世界 (变量空间)
// interface type --> type世界 (类型空间)

// js 和 ts 是两个不同的理念, js中的东西要想在ts中使用, 就需要使用typeof进行转换
// typeof --> 可以将变量空间转换成类型空间


// js 实现
function TupleToObject(array) {
    const obj = {}

    array.forEach(item => {
        obj[item] = item
    })


    return obj;
}


// 1. 返回一个对象
// 2. 遍历 array --> T[number]


