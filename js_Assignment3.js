var item = [ // this is basically an array of objects
  { //object 1
    firstName: "Raj",
    lastName: "Pawar",
    location: {                 //nested object
    city: "Pune",
    state: "Maharashtra",
    country: "India"
    },
    contactNumber: "9090876789"
  },
  { //object 2
    firstName: "Bankim",
    lastName: "Sutaria",
    location: {
    city: "Pune",
    state: "Maharashtra",
    country: "India"
    },
    contactNumber: "8411938906"
  },
  {
    firstName: "Vikram",
    lastName: "Shah",
    location: {
    city: "Surat",
    state: "Gujarat",
    country: "India"
    },
    contactNumber: "9898765645"
  },
  {
    firstName: "Shahil",
    lastName: "Patil",
    contactNumber: "9825189786"
  }
];

var key1 = prompt("Enter object parameter");
var value1 = prompt("Enter respective value to search for");
//var key1 = 'city';
//var value1 = 'Pune';




var counter=1;
 var i;
 for(i=0;i<item.length;i++){
  
     var x;
    var count=1;
    for(x in item[i]){
       console.log('type of element:' + typeof(item[i][x]));
        if(typeof(item[i][x]) === "object"){
          console.log('inside the nested object loop')
          var y;
          for (y in item[i][x]) // ********** nested condition check
            {
              if(item[i][x][y]== value1 )
              {
                console.log(JSON.stringify(item[i]));
              //  document.getElementById('display').innerHTML= JSON.stringify(item[i],null,10);
                document.write(JSON.stringify(item[i],null,10 ) + "\n");
                document.write("<br>");
              }
            }

        }else{
          if(item[i][x]==value1){
            console.log(JSON.stringify(item[i]));
           // document.getElementById('display').innerHTML= JSON.stringify(item[i],null,10);
            document.write(JSON.stringify(item[i],null,10) + "\n");
          }
          else{
              console.log("WRONG" + item[i][x]);

          }
        }
        
        
    } 
   

 }
 


