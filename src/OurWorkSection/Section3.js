import React from 'react'

import long1 from "../Assets/long1.png";
import long2 from "../Assets/long2.png";
import long3 from "../Assets/long3.png";

const Section3 = () => {
    return (
        <div className="Msection3">
            <div className="sub1">
               {/* <div>
                    <h3>Hover to view the project</h3>
               </div> */}
                <div className="card1 card">
                <img src={long1} alt="nothing" />
                {/* <h4>Click to view project</h4> */}

                </div>
                <div className="card2 card">
                    <img src={long2} alt="nothing" />
                </div>
                <div className="card3 card">
                    <img src={long3} alt="nothing" />
                </div>
               
            </div>
        </div>
    )
}

export default Section3
