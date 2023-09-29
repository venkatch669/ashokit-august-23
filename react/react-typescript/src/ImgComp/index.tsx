import React from "react";

export default class ImgComp extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state={name:"rajesh"};
        console.log("constructor-1")
    }
    componentDidMount(): void {
        console.log("did mount-2")
    }
    render()  {
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