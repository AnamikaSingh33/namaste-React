import User from "./User";
import UserClass from "./UserClass"
import React from "react";

class About extends React.Component{
    constructor (props){
        super(props);
        console.log("parent constructor")

    }
    componentDidMount(){
        console.log("parentcomponent didi moun called")

    }
    render(){
        console.log("parent render")
        return(
            <div>
                      <h1>About us Page</h1>
                         {/* <User name={"Anamika Fun"} location={"Bangalore Fun"} contact ={"anamika@fun.com"}/> */}
                         <UserClass name={"first Class"} location={"Bangalore class"} contact ={"anamika@class.com"}/>
                         <UserClass name={"second Class"} location={"Bangalore class"} contact ={"anamika@class.com"}/>
                   </div>
        )
    }
}

export default About;