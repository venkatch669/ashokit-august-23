var a = [10,20,40,50];
	// a.forEach((e)=>{
	// 	console.log(e)
	// });

    var result = a.reduce((acc,e)=> {
        console.log("Acc--", acc);
        return acc+e
    });
    console.log(result);

    // reduce is an array function, which contains extra peramter called accumalator,
    // using accumalator we can store previous value
    // where we use, to get the sum of the record/total 

    // foreach vs Map vs filter vs reduce...

    //             pu
    // forEach -  
