import React from "react";
import Header from "./Header";
import "./Main.css"
import Director from "../images/director_mam.jpg";
import Hod from "../images/hod_cse.jpg";
import Principal from "../images/principal_sir.jpg";
import Assist_Hod from "../images/hod_datascience.jpg";


export default function Main(){
    return(

        <div>
            <Header />
            <div className="main-content" >
                <section style={{marginBottom:"2rem"}}>
                <div className="container">
                    <h1 style={{textAlign:"center",color:"aqua" ,paddingTop:"3rem",paddingBottom:"1.5rem"}}>Welcome to SSE Tech Club</h1>
                    <div className="matter">
                        <p style={{textAlign:"center",color:"aliceblue"}}>The Department of Data science and analytics presents,Techclub
The largest student community in saveetha school of engineering, chennai
Here we help students to enhance and explore their skills,technical knowledge and we motivate peers to become an odd among the crowd
                        </p>
                    </div>
                </div>
                </section>
                <section>
                    <div className="vision container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 style={{color:'wheat',padding:"1rem"}}>Vision </h1>   
                                <p style={{color:"aliceblue",padding:"1rem"}}>The Department of Data science and analytics presents,Techclub
The largest student community in saveetha school of engineering, chennai
Here we help students to enhance and explore their skills,technical knowledge and we motivate peers to become an odd among the crowd</p>                     
                            </div>
                            <div className="col-md-6">
                                <h1 style={{color:'wheat',padding:"1rem"}}>Objective</h1>
                                <p style={{color:"aliceblue",padding:"1rem"}}>
                                The Department of Data science and analytics presents,Techclub
The largest student community in saveetha school of engineering, chennai
Here we help students to enhance and explore their skills,technical knowledge and we motivate peers to become an odd among the crowd
                                </p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h1 style={{color:'wheat',padding:"1rem"}}>Vision </h1>   
                                <p style={{color:"aliceblue",padding:"1rem"}}>The Department of Data science and analytics presents,Techclub
The largest student community in saveetha school of engineering, chennai
Here we help students to enhance and explore their skills,technical knowledge and we motivate peers to become an odd among the crowd</p>                     
                            </div>
                            <div className="col-md-6">
                                <h1 style={{color:'wheat',padding:"1rem"}}>Objective</h1>
                                <p style={{color:"aliceblue",padding:"1rem"}}>
                                The Department of Data science and analytics presents,Techclub
The largest student community in saveetha school of engineering, chennai
Here we help students to enhance and explore their skills,technical knowledge and we motivate peers to become an odd among the crowd
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="administration">
                        <h1 style={{textAlign:"center",paddingBottom:"1rem",color:"cyan"}}>From the Administration Desk</h1>
                    <div class="team-grid">
                        <div class="container">
                            <div class="row people d-flex justify-content-center">
                                <div class="col-md-4 col-lg-3 item">
                                    <div class="box" style={{backgroundImage:`url("${Director}")`}}>
                                        <div class="cover">
                                            <h3 class="name">Dr.Ramya Deepak</h3>
                                            <p class="title">Director,SSE</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-3 item">
                                    <div class="box" style={{backgroundImage:`url("${Principal}")`}}>
                                        <div class="cover">
                                            <h3 class="name">Dr.Ramesh bhaskar</h3>
                                            <p class="title">Principal,SSE</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-3 item">
                                    <div class="box" style={{backgroundImage:`url("${Hod}")`}}>
                                        <div class="cover">
                                            <h3 class="name">Dr.Ramesh bhaskar</h3>
                                            <p class="title">Principal,SSE</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-3 item">
                                    <div class="box" style={{backgroundImage:`url("${Assist_Hod}")`}}>
                                        <div class="cover">
                                            <h3 class="name">Dr.Ramesh bhaskar</h3>
                                            <p class="title">Principal,SSE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
            
        </div>
    );
}