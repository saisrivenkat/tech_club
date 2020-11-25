import React from "react";
import "./Team.css";
import Header from "./Header";
import President from "../images/crew/nanda-2_orig.jpg";
import vicepresident from "../images/crew/Niharika.jpg";
import coordinator from "../images/crew/uday-2_orig.jpg";
import Members from "./TeamMembers";
export default function Team(){
    return(
        <div>
            <Header />
            <div className="container" style={{marginTop:"25px"}}>
                <div className="card cardstyle row centerstuff" style={{paddingLeft:"10px",paddingRight:"10px"}}>
                    <div className="col-sm-12 centerstuff memberpadding">
                        <div className="member">
                            <div className="row centerstuff">
                                <h2 style={{textAlign:"center",padding:"10px",color:"aliceblue"}}>President</h2>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col centerstuff" ><img alt="/" className="img" src={President} /></div>
                                <div className="col"></div>
                            </div>
                            <div className="row centerstuff">
                                <h2 className="hpb" style={{textAlign:"center"}}>Nanda</h2>
                            </div>
                            <div className="row centerstuff">
                                <p style={{color:"aliceblue"}} className="member-contact">
                                    <span className="fa fa-phone-square" style={{padding:".5rem"}}></span>
                                    9874563210<br />
                                    <span className='fa fa-envelope-square' style={{padding:".5rem"}}/>
                                    user@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="card cardstyle row centerstuff" style={{paddingLeft:"10px",paddingRight:"10px"}}>
                    <div className="col-sm-12 centerstuff memberpadding">
                        <div className="member">
                            <div className="row centerstuff">
                                <h2 style={{textAlign:"center",padding:"10px",color:"aliceblue"}}>Vice President </h2>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col centerstuff" ><img alt="/" className="img" src={vicepresident} /></div>
                                <div className="col"></div>
                            </div>
                            <div className="row centerstuff">
                                <h2 className="hpb" style={{textAlign:"center"}}>Niharika</h2>
                            </div>
                            <div className="row centerstuff">
                                <p style={{color:"aliceblue"}} className="member-contact">
                                    <span className="fa fa-phone-square" style={{padding:".5rem"}}></span>
                                    9874563210<br />
                                    <span className='fa fa-envelope-square' style={{padding:".5rem"}}/>
                                    user@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                    
                    </div>
                    <div className="col">
                    <div className="card cardstyle row centerstuff" style={{paddingLeft:"10px",paddingRight:"10px"}}>
                    <div className="col-sm-12 centerstuff memberpadding">
                        <div className="member">
                            <div className="row centerstuff">
                                <h2 style={{textAlign:"center",padding:"10px",color:"aliceblue"}}>coordinator</h2>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col centerstuff" ><img alt="/" className="img" src={coordinator} /></div>
                                <div className="col"></div>
                            </div>
                            <div className="row centerstuff">
                                <h2 className="hpb" style={{textAlign:"center"}}>Uday</h2>
                            </div>
                            <div className="row centerstuff">
                                <p style={{color:"aliceblue"}} className="member-contact">
                                    <span className="fa fa-phone-square" style={{padding:".5rem"}}></span>
                                    9874563210<br />
                                    <span className='fa fa-envelope-square' style={{padding:".5rem"}} />
                                    user@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                    
                    </div>
                </div>
            </div>
            <hr />
            <div className="container" style={{marginBottom:"20px"}}>
                <h1>Members </h1>
            </div>
            <Members />
        </div>
    );
}