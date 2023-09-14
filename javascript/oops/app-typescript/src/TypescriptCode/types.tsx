type TAddress={
  hno:string | number, // any [boolean, number, string, object, array ]
  city:string,
  pincode:number
}

type IStudent={
  sname:string,
  sno:string,
  marks:number[],
  address?:TAddress
}

export default function TypesDiscussion(){
  let sno:number=10;
  let sname:string="venkat";
  let marks:number[]=[40,60,90,20];
  let addres:TAddress={
    hno:123,
    city:"test",
    pincode:123
  }
  let student:IStudent={
      sname:"venkat",
      sno:"Stst",
      marks:[40,60,90,20],
      address:{
          hno:'123',
          city:'test',
          pincode:44444
      }
  }
  let student1:IStudent={
    sname:"venkat",
    sno:"Stst",
    marks:[40,60,90,20]
  }

  // 1. number, string, boolean, null, undefined 
  // 2. object, array 
}