type Push<T extends unknown[], U> = [...T, U]



// js 实现方式
function Push(T, U) {
    return [...T, ...U]
}


