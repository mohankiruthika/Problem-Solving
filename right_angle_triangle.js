function rightAngleTrianlge(n) {
    let value = "";
    for(let i=0; i < n; i++)
    {
        for(let j = 0; j < n ; j++)
        {
            if(j >= n-1-i)
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



rightAngleTrianlge(5);