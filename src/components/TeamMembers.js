import React from "react";
import "./Team.css";
import "./Main.css";
import members from "../resources/member.json";


export default class Members extends React.Component{
    constructor(){
        super();
        this.state={
            crew :members
        }
    }
    render(){
        return(
            <div>
            <div className="container">
            <div className="row">
                {this.state.crew.members.map((members) =>{
                    return (
                        <div class="col-md-4 col-lg-3 item">
                         <div class="box" >
                             <img src={members.img} style={{width:"250px" ,height:"280px"}} alt="/"  />
                             
                                        <div class="cover">
                                            <h3 class="name">{members.name}</h3>
                                            <p class="title">{members.phone}</p>

                                        </div>
                                    </div>
                                </div>
                    );
                    })}
            </div>
            </div>
        </div>
        );
    }
}