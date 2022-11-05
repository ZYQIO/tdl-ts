type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]




// js
function concat(arr1, arr2) {
    return [...arr1, ...arr2]
}
