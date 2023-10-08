function printStarPattern(n){
    let value = '';
    
    let spaces = 2*n - 2;
    for(let i = 1; i < 2*n; i++){
        let stars = i;
        if (i > n) {stars = 2*n-i}
        for(let j = 0; j < stars; j++){
            value += '*';
        }

        for(let j = 0; j < spaces; j++){
            value += " ";
        }

        for(let j = 0; j < stars; j++){
            value += '*';
        }
        if (i >= n){
            spaces +=2;
        }
        else{
            spaces -= 2;
        }
        value += "\n";
    }
    console.log(value);
}

printStarPattern(5);