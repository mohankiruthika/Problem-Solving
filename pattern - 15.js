function printAlphabetPattern(n){
    let value = '';
    
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n-i+1; j++){
            value += ' ';
        }
        let breakpoint = (2*i+1)/2;
        let alpha = String.fromCharCode(65);
        for(let j = 1; j <= 2*i+1; j++)
        {
            value += alpha;
            if (breakpoint > j) {alpha = String.fromCharCode(65+j)}
            else {alpha = String.fromCharCode(alpha.charCodeAt(0)-1)};
        }
        value += '\n';
    }
    console.log(value);
}

printAlphabetPattern(5);