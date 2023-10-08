function printNumberPattern(n){
    let value = '';
    let start = 1;
    for(let i = 0; i < n; i++)
    {
        if(i % 2 == 0) start = 1;
        else start = 0;
        for(let j = 0; j <= i; j++){
            value += start;
            start = 1 - start;
        }
        value += '\n';
    }
    console.log(value);
}

printNumberPattern(5);