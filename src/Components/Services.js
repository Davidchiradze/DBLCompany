import React from 'react'
import './Services.scss'
import architect from '../assets/architect.png';
import clipboard from '../assets/clipboard.png';
import interiorDesign from '../assets/interior-design.png';
const Services = () => {
    return (
        <React.Fragment>

        <div className="services"> 
            <div className="servicesdiv">
            <img src={clipboard} alt="clipboard"/>
                <h3>პროექტები</h3>
            </div>
            <div>
            <img src={architect} alt="architect"/>
                <h3>მშენებლობა</h3>
            </div>
            <div>
            <img src={interiorDesign} alt="interiorDesign"/>
            <h3>ინტერიერი</h3> 
            </div>
        </div>
        </React.Fragment>

    )
}
export default Services;
