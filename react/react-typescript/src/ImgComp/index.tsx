import React from "react";

export default class ImgComp extends React.Component<any, any>{
    constructor(props:any){ // intilization
        super(props);
        this.state={name:"rajesh"};
        console.log("constructor: Step-A - Step1")
    }
    componentDidMount(): void {
        console.log("did mount - html/css is rendered : step-B");
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        console.log("did update - state/props changes: step-C")
    }
    componentWillUnmount(): void {
        console.log("unmount - removing from DOM: step-D")
    }
    // componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        
    // }
    render()  {
        console.log("rendering : step-E")
        return(
            <> 
            {/* //React.Fragment */}
                <p>{this.props.text}</p>
                <p>state value : { this.state.name} </p> 
                {/* rajesh */}
                {/* ankit */}
                <button onClick={()=>{
                    // this.setState({name:"ankit", no:1});
                    this.setState({name:"ankit", no:1},()=>{
                        console.log("updated", this.state.name); // ankit
                    });
                    console.log("---", this.state.name);                  // rajesh 
                }}> change the name</button>
            </>
        )
    }
}