function printPyramidPattern(n){
    let value = '';

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n + i ; j++){
            if (j >= n-i-1 && j <= n+i)
            {
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


printPyramidPattern(5)