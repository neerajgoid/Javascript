//alert('Hi my 2nd javascript code');

var input = prompt('Enter the no');
var factorial=1;
var i;
   // debugger;
    if(input>0)
    {
        for( i=1; i<=input; i++)
        {
            factorial=factorial*i;
        }
    }

console.info('Fact is:' + factorial);
alert('Fact is:' + factorial);