import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
         this.state={
            count:0,
            count2:2,
         }
         console.log("child constructor")
    }
    componentDidMount(){
        console.log("child component did mount called")

    }
    render(){

        const {name,location,contact} = this.props;
        const {count,count2} = this.state;
        console.log("child render")
        return(
            <div className="user-card">
                  <h1>Count:{count}</h1>
                  <h1>Count2:{count2}</h1> 
                  <button onClick={()=>
                    {
                        this.setState({
                            count:this.state.count+1,
                            count2:this.state.count2+1,
                        })
                    }
                  }> count</button>
                <h2>Name:{name}</h2>
                <h2>Location:{location}</h2>
                <h2>Contact:{contact}</h2>
            </div>
        )
    }
}

export default UserClass;