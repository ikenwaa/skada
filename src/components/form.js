import React, {Component} from "react";
import "./form.css";
import { FaMapMarkerAlt } from 'react-icons/fa';


class Form extends Component{
    state = {}

    render(){
        return(
            <section className="gtx">
                <div className="top-txt"></div>
                <div className="top-sgn">
                    <aside>
                        <FaMapMarkerAlt color="#2F80ED" width="12px" height="15.43" className="arrow"/>
                        <input type="text" className="ln-ph" placeholder="Pick up point" />
                    </aside>
                    <aside>
                        <FaMapMarkerAlt color="#2F80ED" width="12px" height="15.43" className="arrow"/>
                        <input type="text" className="ln-ph" placeholder="Delivery point" />
                    </aside>
                </div>

                <div className="quad">
                    <select className="sm-txt">
                        <option value="test1" >Pick up time</option>
                    </select>
                    <select className="bg-txt">
                        <option value="test1">Pick up date</option>
                    </select>
                </div>
                <div className="tert">
                    <select className="tny-txt">
                        <option value="test3">Pick off time</option>
                    </select>
                    <select className="lrg-txt">
                        <option value="test3">Pick off date</option>
                    </select>
                </div>
                
                <div>
                   <div className="brf">Goods Description</div> 
                   <div className="borx">
                       <input type="text" className="mantra"/>
                       <select className="enel">
                          <option value="text5">Quantity</option>
                       </select>
                   </div>
                </div>
                <div>
                    <select className="law-one">
                        <option value="text6">Goods Type</option>
                    </select>
                </div>
                <div >
                    <input type="text" placeholder="Describe your goods" className="law-two"/>
                </div>
                <button className="on-nxt">Continue</button>
            </section>
        )
    }
}

export default Form;