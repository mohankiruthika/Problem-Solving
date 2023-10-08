function printAlphabetPattern(n){
    let value = '';

    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n-i ; j++)
        {
            value += String.fromCharCode(65 + j);

        }
        value += "\n";
    }
    console.log(value);
}

printAlphabetPattern(5);