


var a = prompt("Enter 1st string");

var c = a.length;

var flag=1;

    for(var i=0 ; i <c;i++)
    {
        if(a.charAt(i) === a.charAt((c-i)-1))
        {
            console.log("char " + i + "matched");
        }
        else 
        {
            console.log("char " + i + "NOT matched");
            flag=0;
            break;
            
        }
    }
    if(flag==0)
    {
        alert('Not Palindrome');
    }
    else
    {
        alert('Palindrome');
    }
