var employeePromise = d3.json("employee.json")

var succFCN= function(employees)
     {console.log("found employees", employees)
     draw(employees)}

var failFCN= function(err)
     {console.error("didn't find employees", error)}

employeePromise.then(succFCN,failFCN)

var draw = function(employeedata)
{
   
var rows = d3.select("#employeetable tbody")
.selectAll("tr")
.data(employeedata)
.enter()
.append("tr")

rows.append("td")
   .text(function(person){return person.firstName;})

rows.append("td")
   .text(function(person){return person.lastName;})

rows.append("td")
   .text(function(person){return person.photo;})

rows.append("td")
   .text(function(person){return person.title;})

rows.append("td")
   .text(function(person){return person.unit;})

rows.append("td")
   .text(function(person){return person.email;})

rows.append("td")
   .text(function(person){return person.bio;})

rows.append("td")
   .text(function(person){return person.phone;})
}