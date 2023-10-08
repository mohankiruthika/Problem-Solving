function squarePattern(n) {
    let value = "" 
    for(let i=0; i < n; i++){
        for(let j=0; j<n;j++){
            value += "*";
        }
        value += "\n";
    }
    console.log(value);
}

squarePattern(5);