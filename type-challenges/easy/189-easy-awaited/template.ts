type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
    ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
    : T;



// infer
// 1. 只能在条件类型里面使用
// 2. 设置未知数 变量
