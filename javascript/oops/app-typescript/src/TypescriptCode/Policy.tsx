import { Demo } from "./Student";

type records={
    name:string;
    listOfPolicies:string[]
}

interface ExpeiryOfPolicty{
    getPolicyName:Function;
}
abstract class ExpiryOfPolicy{
    abstract getPolicyName():number;
}

class User extends ExpiryOfPolicy{
    public name:string=''; 
    // protected - can be used in with in class and inhertied but not with object/instance of class 
    // private - the property can't be used outside of class, even in inherited class, you can access the private property
    // public - outside of class, inside of class, inherited class
    constructor(policyInfo:records){
        super();
        this.name=policyInfo.name;
    }
    getPolicyName(){
        return 1;
    }
    getPolicyName(String name){

    }

}
class Policy extends User{
    listOfPolicies:string[]=[];    
    constructor(policyInfo:records){
        super(policyInfo);
        this.listOfPolicies= policyInfo.listOfPolicies;        
    }    
    static getName(){
        return this.name;
    }
}

export default function PolicyFun(){
    const records:records[]=[
        {
            name:"venkat",
            listOfPolicies:["term policy","health policy"]
        },
        {
            name:"abhinadh",
            listOfPolicies:["term policy"]
        },
        {
            name:"ankit",
            listOfPolicies:["health policy"]
        }
    ];

    let p = new Policy(records[0]);

    
    // p.getPolicyHolderName();

    console.log(p.listOfPolicies);
    console.log(p.name);
    console.log(Policy.getName())
    return <h1> policy class </h1>
}