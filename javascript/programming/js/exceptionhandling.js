
// let asdf=0;
let count=0;
function getTable(parentValue){
    return()=>{
        try{
            for(let i=1;i<=10;i++){
                // console.log(i.split("")) // type error
                console.log(`${parentValue}*${i} = ${parentValue*i}`)
            }
            // console.log(asdf) // reference error
            throw new Error("custom error") // user defined exception

        }
        catch(venkat){
            console.log(venkat);
            // const obj = new Error(ex);
            console.log(venkat.name);
            // to identify which type of error 
            //approach -1 
            switch(venkat.name){
                case 'TypeError': alert("type Error"); break;
                case 'ReferenceError': console.log("reference error");
                default : console.log("other errors");
            }
            //approach -2
            if(ex instanceof TypeError){

            }
        }
        finally{
            // if(count<5){
            //     console.log("count", count);
            //     count = count+1;
            //     getTable(2)();
            // }
            // else{
            //     return;
            // }
            console.log("count", count);
            console.log("finally")
        }
    }
}
getTable(2)();
getTable(3)();