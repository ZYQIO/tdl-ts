type Length<T extends readonly any[]> = T["length"]

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;

type t1 = Length<typeof tesla>

type t2 = typeof tesla


// js

function getLength(arr) {
    if (!Array.isArray(arr)) return;
    return arr.length;
}
