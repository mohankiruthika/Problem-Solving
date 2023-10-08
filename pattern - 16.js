function printAlphabetPattern(n){
    let value = '';
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j <= i; j++)
        {
            let alpha = String.fromCharCode(65);
            alpha = String.fromCharCode(alpha.charCodeAt(0)+n-j-1);
            value += alpha;
            value += ' ';
        }
        value += '\n';
    }
    console.log(value);
}

printAlphabetPattern(5);