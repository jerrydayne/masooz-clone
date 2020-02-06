import React from 'react';
import './Home.css';

import Speed from './Speed';


const Home = () => {
    return (
        <React.Fragment>
            <div className="what_we_do">
            <div className="medic_home">
                <div className="courgette header_logo_title">we are good at...</div>
                <div className="alfa_slab text1">Connecting Patients</div>
                <div className="fredoka text2">to timely care</div>
                <button className="medic_prompt">Prompt for Medical Healthcare</button>
            </div>
        </div>

        <Speed />
        </React.Fragment>
        
    )
}


export default Home;