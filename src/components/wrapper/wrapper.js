import React from 'react'
import WOW from "wow.js";
// import {Animate} from 'animate.css-react'n

const Wrapper = () => {
    

    const Wdata = [
        {
            cover: <i class='fa-solid fa-truck-fast'></i>,
            title: "Worldwide Delivery",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i class='fa-solid fa-id-card'></i>,
            title: "Safe Payment",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i class='fa-solid fa-shield'></i>,
            title: "Shop With Confidence ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i class='fa-solid fa-headset'></i>,
            title: "24/7 Support ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
    ]
    return (
        <div className='wrapper row'>
            <div className='container grid2'>
                {Wdata.map((val, value) => {
                    return (
                        <div className='prod  ' key={value}>
                            <div className='img icon-circle' >
                                <i>{val.cover}</i>
                            </div>
                            <h3>{val.title}</h3>
                            <p>{val.decs}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Wrapper