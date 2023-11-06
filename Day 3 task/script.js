// TASK - DAY 3

// 1.Use the rest countries' API-URL--> "https://restcountries.com/v3 1/all" and 
// display all the country flags in console ??
 
var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function()
{

var data = JSON.parse(request.response);

for(flg in data)
{console.log(`The Flag of the country - ${data[flg].name} - ${data[flg].flag},"<br>"`)};

}

// 2.Use the same rest countries and print all countries names, regions, sub-region and populations

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload = function()
{
 var report = JSON.parse(request.response);
 for(i = 1 ; i < report.length ; i ++)
{
  console.log(`${[i]}-(a)`,"Country name is - ",report[i].name,"\n",
                   "  ",`(b)`,"Region name is - ",report[i].region,"\n",
                   "  ",`(c)`,"Sub-Region name is - ",report[i].subregion,"\n",
                   "  ",`(d)`,"The population is - ",report[i].population);
}
}

//3.How to compare two JSON have the same properties without order?

let obj_1 = {"name":"John","age":"5"};
let obj_2 = {"age":"5","name":"John"};

if (obj_1.name == obj_2.name)
{
    console.log("The properties are same");
}
else
{
    console.log("The properties are not same");
}

