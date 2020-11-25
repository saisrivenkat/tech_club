import React from "react";
import Header from "./Header"
import Codigo from "../images/events/codigo.jpg";
import ml from "../images/events/ml.jpg";
import android from "../images/events/android.jpg";

export default function Events(){
    return(
        <div>
            <Header />
            <h1>Events</h1>
            <div className="container">
            <h1 style={{marginBottom:"10px"}}>One Day Programming Contest "CODIGO-2020" </h1>
            <div className="row">
                <div className="col">
                    <img alt="/" src={Codigo}  />
                </div>
                <div className="col">
                    <p>Department of Data Science and Analytics & Students of TECH CLUB has organized One Day Programming Contest CODIGO-2020 on 16-3-2020. Around 75 students registered for Round 1 - Chase the Option contest and out of which 35 students got shortlisted for Round 2- Crack the snippets.  And finally for Round 3-Fingers to Keys, 20 students got shortlisted.  Out of which top three best performer has been awarded with Cash Prizes and Appreciation Certificates. </p>
                </div>
            </div>
            <hr />
            <h1 style={{marginBottom:"10px"}}>One Day Programming Contest "CODIGO-2020" </h1>
            <div className="row">
                <div className="col">
                    <img alt="/" src={ml}  />
                </div>
                <div className="col">
                    <p>Department of Data Science and Analytics & Students of TECH CLUB has organized One Day Programming Contest CODIGO-2020 on 16-3-2020. Around 75 students registered for Round 1 - Chase the Option contest and out of which 35 students got shortlisted for Round 2- Crack the snippets.  And finally for Round 3-Fingers to Keys, 20 students got shortlisted.  Out of which top three best performer has been awarded with Cash Prizes and Appreciation Certificates. </p>
                </div>
            </div>

            </div>
        </div>
    );
}