function downwardTrianglePatter(n){
    let value = '';
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n-i; j++)
        {
            value += '*';
        }
        value += '\n';
    }
    console.log(value);
}

downwardTrianglePatter(5)