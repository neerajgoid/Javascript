var studentData = [
    {
        name: 'Neeraj',
        age: 22,
        location: 'Pune',
        company: 'Globant'
    },
    {
        name: 'Rohan',
        age: 23,
        location: 'Chennai',
        company: 'Globant'
    },
    {
        name: 'Belli',
        age: 29,
        location: 'Germany',
        company: 'Globant Inc'
    },
    {
        name: 'Niraj',
        age: 22,
        location: 'Pune',
        company: 'Globant Inc'
    },
];
function generate_table() {
  //  var body = document.getElementsByTagName("body")[0];           //  why do we need this [0]? Ans) this [0] refers to the first body tag in thr html page

    var container = document.getElementsByTagName('div')[0]; //refers to the first <div> tag in the html code
    var table = document.createElement("table");
    
    var header = document.createElement("tr");

    var nameHeader = document.createElement("th");
    var ageHeader = document.createElement("th");
    var locationHeader = document.createElement("th");
    var companyHeader = document.createElement('th');

    nameHeader.textContent = "Name";  // can also do document.createtextnode and then append that to the requried element (see how name and age are added differently)
    ageHeader.textContent = "Age";
    locationHeader.textContent = "Location";
    companyHeader.textContent = "Company Name"

    header.appendChild(nameHeader);
    header.appendChild(ageHeader);
    header.appendChild(locationHeader);
    header.appendChild(companyHeader);

    table.appendChild(header);


    for (var i = 0; i < studentData.length; i++) // can change to hardcoded 4 and also check
    {
        var row = document.createElement('tr');
                                                        // can use a for in loop
        var nameCell = document.createElement('td');
        var nameCellText = document.createTextNode(studentData[i].name);
        nameCell.appendChild(nameCellText);
        row.appendChild(nameCell);

        var ageCell = document.createElement('td');
        ageCell.textContent = studentData[i].age;
        row.appendChild(ageCell);

        var locationCell = document.createElement('td');
        locationCell.textContent = studentData[i].location;
        row.appendChild(locationCell);

        var companyCell = document.createElement('td');
        companyCell.textContent = studentData[i].company;
        row.appendChild(companyCell);


        table.appendChild(row);
    }

    //table1.appendChild(table); // if i append to table1 it gives an error that function does not exist.
    // ans) cannot append to another table. The appending to another div tag works.
    
    //body.appendChild(table);
   
   
    container.appendChild(table);
    table.setAttribute("border", "2");
    table.setAttribute("id", "neerajtable");
    console.log(table);
    rowHandle(); //
   
   
}
function rowHandle() {
    var tbl = document.getElementById('neerajtable');

    var rows = tbl.getElementsByTagName('tr');

    for (var i = 0; i <= studentData.length; i++)
    {
        var currentrw = tbl.rows[i];
        
        if(i!=0){ // to skip the header
            currentrw.addEventListener("mouseover", onRowHover);
            currentrw.addEventListener("mouseout", onRowOut);
        }
        
        currentrw.addEventListener("click", onClick);
        
    }
}

function onRowHover(event){
    event.currentTarget.style.backgroundColor = 'gray'; //event.currentTarget
}
// different properties can be seen on mozilaa firerfox.
//if an attribute is red in color means it is deprecated script.
function onRowOut(event){
    event.currentTarget.style.backgroundColor = 'white';
}


function onClick(event){
    
    document.getElementById('paragraph').innerHTML = event.currentTarget.innerHTML + '<br>';           

}

/*
DOUBTS
1) If i remove the [0] value from the createElement part, the table doesnt get created.
2) If i click on create table more than once, i get more than one table which is cool.
   But i am able to hover over only  and select from 1st table. WHy is that?
3) I can append the entire table created from js to body and div tag but not to another table tag why?    
*/