function printReversedPyramidPattern(n){
    let value = '';

    for(let i = 0; i < n ; i++)
    {
        for(let j = 0; j < n*2-i-1 ; j++)
        {
            if(j < n*2-i && j >= i){
                value += '*';
            }
            else{
                value += ' ';
            }
        }
        value += '\n';
    }
    console.log(value);
}

printReversedPyramidPattern(5);