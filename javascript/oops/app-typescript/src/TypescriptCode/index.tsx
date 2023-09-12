
function TypescriptDemo() {
  const getValue= (val:number):number =>{
    let a:number=10;
    a=20;
    console.log(a);
    return 10;
  }
  getValue(10);
  // getValue("venkat");
  return <div> typescript </div>;
}

export default TypescriptDemo;
