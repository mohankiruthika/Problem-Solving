function printStarPattern(n){
    let value = '';
    for(let i = 1; i <= 2*n; i++)
    {
        let stars = i;

        if(stars>n){
            stars = 2*n-i;
        }

        for(let j = 0 ; j < stars; j++){
            value += '*';
        }
        value += '\n';
    }
    console.log(value);
}

printStarPattern(5);