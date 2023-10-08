function printStarPattern(n){
    let value = '';
    for(let i = 1; i <=n ; i++){
        for(let j = 1; j <=i ; j++){
            value += j + " ";
        }
        value += '\n';
    }
    console.log(value);
}


printStarPattern(5);