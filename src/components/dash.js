import React, {Component} from "react";
import "./dash.css"
import { throwStatement } from "@babel/types";

class Dash extends Component
{
    state = 
    {
       
    }
    render()
    {
        return(
                <section className="zomoy">
                <div className="tr-one">skada.</div>
                <div className="tr-two">Hey,<span> Hunger Clinic</span></div>
                <div className="tr-three">
                    <div className="log">Dashboard</div>
                    <div className="wano"><br />Delivery Status</div>
                    <div className="zou"><br />Track Goods</div>
                    <div className="rando"><br />Manage Wallet</div>
                    <div className="merry"><br />Logout</div>
                </div>
                <button className="rw-btn">Schedule Pickup</button>
            </section>
            
        )
    }
}



export default Dash;