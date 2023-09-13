
interface IStudent{
  name:string,
  sno:number,
  ispassed:boolean
}
type TStudent={
  name:string,
  sno:number,
  ispassed:boolean
}

function TypescriptDemo() {
  const getValue= (val:number):number =>{
    let a:number=10;
    let b:boolean=true;
    let arr:number[]=[1,1,1,1,2];
    let arr1:string[]=["Test","Test"];
    const obj:TStudent={
      name:"venkat",
      sno:1,
      ispassed:true
    }
    console.log(a);
    return 10;
  }
  getValue(10);
  // getValue("venkat");
  return <div> typescript </div>;
}

export default TypescriptDemo;
