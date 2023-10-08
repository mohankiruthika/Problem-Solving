function hollowPattern(n){
    let value = "";

    for(let i=0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i===0 || j===0 || i===n-1 || j===n-1){
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

hollowPattern(5);