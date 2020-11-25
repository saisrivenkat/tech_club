import React from "react";
import Header from "./Header";
import "./Activities.css";

export default function Activities(){
    return(
        <div>
            <Header />
            <div className="container" style={{padding:"2rem"}}>
                <h1 style={{color:"aliceblue"}}>Completed Activities</h1>
                <div className="completed-activities">
                    <ul>
                        <li>A week of classes on Android App development </li>
                        <li>Workshop On "Introduction To Machine-Learning"</li>
                        <li>Hands-on Session On "Android App Development"</li>
                    </ul>
                </div>
            </div>
            
            <div className="container" style={{padding:"2rem"}}>
            <hr />
                <h1 style={{color:"aliceblue"}}>Upcoming Activities</h1>
                <div className="upcoming-activities">
                    <ul>
                        <li>C20-programming introduction Event </li>
                        <li>One month Profile Excellence Challange</li>
                        <li>Hackathon (exploring their skills to given problem statement)</li>
                        <li>Tech Fest (Research project Exhibition )</li>
                        <li>Cracathon(The complete idea presentation of their own idea)</li>
                        <li>Codethon(Programming challenge)</li>
                        <li>Hands on session on web application using python( django )</li>
                        <li>A complete view on machine learning from scratch to advance</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}