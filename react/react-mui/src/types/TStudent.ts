export type TStudent={
    name:string,
    isPassed:boolean,
    no:number,
    marks?:[{
      sub:string,
      marks:number
    }]
  }