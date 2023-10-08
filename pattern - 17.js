function printStarPattern(n){
    let value = '';
    let space = 0;
    for(let i = 0; i < n ;i++){
        for(let j = 0 ; j<n-i; j++)
        {
            value += '*';
        }
        for(let j = 0 ; j < space; j++){
            value += ' ';
        }

        for(let j = 0 ; j<n-i; j++)
        {
            value += '*';
        }
        space += 2;
        value += '\n';
    }
    let space1 = 2*n-2;
    for(let i = 0; i < n ;i++){
        for(let j = 0 ; j<=i; j++)
        {
            value += '*';
        }
        for(let j = 0 ; j < space1; j++){
            value += ' ';
        }

        for(let j = 0 ; j<=i; j++)
        {
            value += '*';
        }
        space1 -= 2;
        value += '\n';
    }
    console.log(value);
}


printStarPattern(5);