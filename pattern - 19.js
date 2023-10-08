function minimumOfTwo(x, y){
    return x < y ? x : y;
}

function printNumberPattern(n){
    let value = '';
    for(let i = 0 ; i < 2*n-1; i++){
        for(let j = 0; j < 2*n-1; j++){
            let top = i;
            let left = j;
            let right = (2*n-2-j);
            let bottom = (2*n-2-i);
            let minTwo = minimumOfTwo(minimumOfTwo(top, bottom), minimumOfTwo(left,right));
            value += n-minTwo;
            
            value += " ";
        }
        value += "\n";
    }
    console.log(value);
}

printNumberPattern(4);