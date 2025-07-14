import React from "react";

class Profileclass extends React.Component{
    constructor(props){
          super(props)
          console.log("constructor of child component", this.props.comptype)

          this.state={
            componenttype : "Class",
            flag:false,
            name:this.props.authorname
          }

          
    }

      

    getComponentType = () => {
        const { comptype } = this.props;
        this.setState({
            componenttype: comptype,
            flag:true
        });
    }


    async componentDidMount(){
        console.log("component Did Mount of Child component", this.props.comptype)
    
        // to make api calls 

        const data= await fetch("https://api.github.com/users/nishatarif")

        const json_data = await data.json() ;

        console.log(json_data)

        this.setState({
            name : json_data.login
        })
    }

    componentDidUpdate(){
         console.log("component Did Update of Child component", this.props.comptype)
        
    }

     componentWillUnmount(){
         console.log("component Will Unmount of Child component", this.props.comptype)
        
    }
    render(){

        console.log("component Rendered of child component", this.props.comptype)
        //debugger;

        const { location, emailid } = this.props;
        const { componenttype , name} = this.state;

        return (
             <div className='profile-container'>
                <button style={{cursor:"pointer"}} onClick={this.getComponentType}>Click to get the component type!!</button>
                {this.state.flag && <p>{componenttype}</p>}
                <h1>Author Name : {name}</h1>
                <h2>Location : {location}</h2>
                <h3>EmailId : {emailid}</h3>
            </div>
        )
    }

}

export default Profileclass;