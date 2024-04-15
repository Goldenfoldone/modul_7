function poridak(ter){
    let massiv = Array.from(new Set(ter))
    function fun(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    };
    massiv.sort(fun);
    return massiv;
}


console.log(poridak([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]))