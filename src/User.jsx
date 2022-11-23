import { Component } from "react";
let list =[{id:'1',name:'Mophat',age:20},{name:'Harun',age:3}] 

class User extends Component{

    constructor(props){
        super(props)
        this.state = {
            list:list
        }
        this.onDismiss = this.onDismiss.bind(this)
    }
    onDismiss(id){

const updatedList = this.state.list.filter( (item)=> item.id !==id )
this.setState({list:updatedList});

    }
    render(){
        return (
        <main>
              <p>{this.state.list.map((item)=>

            <>
                <p key={item.name}>My name is {item.name} </p>
                <button className="btn btn-block btn-secondary" onClick={()=>this.onDismiss(item.id)}  type='button' >
            DISMISS

                </button>
                
            </>
              )}</p>
        </main>
        );
    }

}
export default User;