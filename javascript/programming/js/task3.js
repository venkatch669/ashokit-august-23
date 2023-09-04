
var students = [{
    "name": "John",
    "age": 22,
    "hobby": {
		"reading" : true,
		"gaming" : false,
		"sport" : "football"
    },
    "class" : ["JavaScript", "HTML", "CSS"]
},
{
    "name": "sandeep",
    "age": 35,
    "hobby": {
		"reading" : true,
		"gaming" : false,
		"sport" : "cricket"
    },
    "class" : ["React", "HTML", "CSS"]
},
{
    "name": "Phani",
    "age": 30,

    "class" : ["React"]
}]


// null check
let sports = students.filter(obj =>{
    // return obj && obj.hobby && obj.hobby.sport && obj.hobby.sport=='cricket';    
    return obj?.hobby?.sport=='cricket';    
   });
   console.log("sports" , sports)

   alert("Test")
