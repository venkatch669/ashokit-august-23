class Demo{

}
class Generic extends Demo{
    fullname:string='';
    setFullName(firstName:string, lastName:string){
        this.fullname= firstName+lastName;
    }
    getFullName(){
        return this.fullname;
    }
}
class Student extends Generic{
    name:string="";
    no:number=0;    
    
    getName():string{
        return this.name;
    }
    setName(name:string){
        this.name=name;
    }
}
export default function ClassDemo(){
    let s= new Student(); //object is instance of class, where we can access the class feature/function/variables
    s.setName("venkat");
    s.setFullName("ankit ","gupta")
    console.log(s.getName());
    console.log(s.getFullName());


    let a = new Student();
    a.setName("ankit");
    console.log(a.getName());  //ankit

    let b = new Generic();
    b.setFullName("venkat", "ch");
    console.log(b.getFullName());

    return <h1> classDemo </h1>
}

//DRY principle - don't repeat youself..