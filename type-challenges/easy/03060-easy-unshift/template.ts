type Unshift<T extends unknown[], U> = [U, ...T]



// js 实现
function Unshift(T, U) {
    return [U, ...T];
}
