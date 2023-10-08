function printAlphabetPattern(n){
    let value = '';
    let alpha = String.fromCharCode(65);
    for(let i = 0; i < n; i++){
        for(let j = 0; j <= i; j++)
        {
            value += alpha;
        }
        alpha = String.fromCharCode(65+i+1);
        value += '\n';
    }
    console.log(value);
}


printAlphabetPattern(5);