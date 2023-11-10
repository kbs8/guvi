// 1.For the given JSON - Iterate - all FOR loops

var json = [{
    "id" : "sankar_1", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail":  "sankarjaguar8@gmail.com"
  },
  {
    "id" : "sankar_2", 
    "msg"   : "For the - JSON iterate all for loops",
    "task" : "zen - task",
    "mail": "sankarjaguar8@gmail.com"
  }];
  
  //for loop
  
  for(var i = 0; i < json.length; i++) 
  {
    var obj = json[i];
  
    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);
  }
  
  //for Each
  
  json.forEach(function(obj) { console.log(obj.msg); });
  
  //for In
  
  for (var key in json) 
  {
  if (json.hasOwnProperty(key)) 
  {
  console.log(json[key].id);
  }
  }
  
  //for Of
  
  // let text = "";
  // for (let x of json[key].id) 
  // {
  // text += x; 
  // }
  // console.log(text);
  
  //--------------------------------------------------------
  
  // 2.MY RESUME - JSON FORMAT
  
  var myCurriculumVitae={
    "basics": {
      "name": "Bavani Sankar k",
      "email": "sankarjaguar8@gamil.com",
      "phone": 9994609443,
      "degree": "B.E",
      "location": {
        "address": "No 134 Mela vaikankarai st Velippalayam",
        "postalCode": 611001,
        "city": "Nagapattinam",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/sankar-bavani-ab11a327b?",
        }
      ]
    },
    
    "education": [
      {
        "institution": "Panimalar Engineering College",
        "department": "Mechanical Engineer",
        "batch start year": 2016,
        "batch end year": 2019,
        "gpa": 7.6,
      }
    ],
    "skills": [
      {
        "name": "python,javascript,ASNT Level II",
        "level": "beginner",
        "project": 
        [
          "adjusting the lathe machine system using python language"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,English",
      }
    ],
    "interests": [
      {
        "name": "Heavy Engineering,Oilfield,Planting",
      }
    ]
  }
  console.log(myCurriculumVitae);
  