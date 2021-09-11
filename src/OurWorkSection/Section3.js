import React from 'react'
import pic1 from "../Assets/pic1.jpg";
import pic9 from "../Assets/pic9.jpg";
import pic3 from "../Assets/pic11.png";

const Section3 = () => {
    return (
        <div className="Msection3">
            <div className="sub1">
                <div className="card1 card">
                    <img style={{width: "300"}} src="https://muhammadtalha.me/wp-content/uploads/2021/08/Fitness-Freakers-scaled.jpg" alt="nothing" />
                </div>
                <div className="card2 card">
                    <img src={pic9} alt="nothing" />
                </div>
                <div className="card3 card">
                    <img src={pic3} alt="nothing" />
                </div>
                <div className="card3 card">
                    <img src="	https://muhammadtalha.me/wp-content/uploads/2021/08/Ecommerce-Website-1-1-scaled-1.jpg" alt="nothing" />
                </div>
            </div>
        </div>
    )
}

export default Section3
