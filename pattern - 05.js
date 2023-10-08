function printStarPattern(n){
    let value = '';
    for(let i = 1; i <= n; i++)
    {
        for(let j = 1; j <= n-i+1; j++){
            value += '* ';
        }
        value += '\n';
    }
    console.log(value);
}
printStarPattern(5);