import React, {Component} from "react";
import "./nav.css"
import Rect from "./rectangle.png"
import Burger from "./burger";
import Form from "./form";
import Maps from "./map"

class Nav extends Component
{
    state = {
        dsply:false
    }
    handleHambuger=()=> {
        const spec  = document.querySelector(".zomoy")
        console.log(spec.style.display)
        if(spec.style.display == "none"){
            spec.style.display  = "block"
            return
        }

        if(spec.style.display == "block"){
            spec.style.display  = "none"
            return
        }
   
 
    }
    render()
    {
        return(
            <section className="empress">
                <div className="bar">
                    <aside className="offscreen">
                        <Burger onClick={this.handleHambuger}  style={{cursor:'pointer'}} />
                    </aside>
                    <aside className="header">
                        Profile
                    </aside>
                    <aside className="icons">
						<span><i class="far fa-bell" style={{width: 24, height: 20}}></i></span>
                        <img src={Rect} className="png"/> 
                    </aside>
                </div>
                <div className="body-two">
                    <Form />
                   <Maps />
                </div>
            </section>
        )
    }
}


export default Nav;