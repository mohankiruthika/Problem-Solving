function printNumberPattern(n){
    let value = '';
    let space = 2*(n-1);
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++)
        {
            value += j;
        }

        for(let j = 0; j < space; j++){
            value += ' ';
        }

        for(let j = i; j >= 1; j--){
            value += j;
        }
        value += '\n';
        space -= 2;
    }
    console.log(value);
}

printNumberPattern(4);