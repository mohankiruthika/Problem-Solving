function printStarPattern(n){
    let value = '';
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n-i-1; j++){
            value += " ";
        }
        for(let j = 0; j < 2*i+1; j++){
            value += "*";
        }
        for(let j = 0; j < n-i-1; j++){
            value += " ";
        }
        value += '\n';
    }
    for(let i = 0; i < n; i++){
        for(let j = 0; j < i; j++){
            value += " ";
        }
        for(let j = 0; j < 2*n-(2*i+1); j++){
            value += "*";
        }
        for(let j = 0; j < i; j++){
            value += " ";
        }
        value += '\n';
    }
    console.log(value);
}

printStarPattern(5);