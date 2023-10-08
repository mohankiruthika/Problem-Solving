function hollowTrianglePattern(n){
    let value = '';
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j <= i; j++)
        {
            if (j == 0 || j == i || i == n-1)
            {
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


hollowTrianglePattern(6);