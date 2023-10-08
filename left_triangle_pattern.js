function leftTrianglePattern(n){
    let value = '';
    for(let i = 0; i < n; i++){
        for(let j = 0; j <= i; j++){
            value += '*';
        }
        value += '\n';
    }
    console.log(value);
}


leftTrianglePattern(5);