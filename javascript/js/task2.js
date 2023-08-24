// const students =[
//     {	
//         name:"venkat",
//         marks:[50,60,70,80,80,90],
//         passed:true,
//     },
//          {	
//         name:"sandeep",
//         marks:[50,20,70,80,80,90],
//         passed:false,
//     },
//          {	
//         name:"raj",
//         marks:[10,60,70,80,80,90],
//         passed:false
//     },
//      {	
//         name:"ankit",
//         marks:[90,60,70,80,80,90],
//         passed:true
//     }]

//     let a = [];
// console.log("EMpty array :  ",a);
//     console.log("---------------------")

//     students.filter(function(item){
//         console.log(item)
//     });
//     console.log("--------------------")
//     const search = students.filter(function(item) {
//         return item.passed === false;
//     });
//     console.log(typeof(search))
//     for(let i=0;i<Object.keys(search).length;i++){
//        console.log(search[i])
//     }

//     // let a =[];

//     const result = students.find(function(item){
//         return item.name === "venkat";
//     });
//     console.log(result)

//     // console.log(a)
//     let sum =0;
//     for(let i=0;i<result.marks.length;i++){
//       sum = sum + result.marks[i];
//     }
//     console.log("Total marks of venkat :  ",sum)


const totalMarks = function (studentList, student) {

    // Using for each 
    let sum = 0;
    studentList.forEach((e) => {
        if (e.name == student && sum == 0) {
            e.marks.forEach(mark => {
                sum += mark;
            });
        }
    });
    return sum;
}
let names = [];
students.forEach(e => names.push(e.name));

// Enter student name
let student = prompt("Enter student name: " + names);

let total = totalMarks(students, student);

if (total <= 0) {
    console.log("Enter valid student name.",)
} else {
    console.log("Sum of marks of", student, " : ", total);
}
