import React from 'react';
import './skills.css';
import WebIcon from "../../assets/WebIcon.png"
import PythonIcon from '../../assets/PythonIcon.webp';
import DbmsIcon from '../../assets/DbmsIcon.png';


const skills = () => {
    return (
        <section id="skills">
            <span className='skillTitle'>What i do</span>
            <span className='skillDesc'>I'm a versatile web developer with a strong proficiency in React.js, Python and database management, ready to bring your digital visions to life.</span>

            <div className='skillBars'>

                <div className='skillBar'>
                    <img src={WebIcon} alt='' className='skillBarImg' />
                    < div className='skillBarText'>
                        <h2>Website Developement</h2>
                        <p>Turning Your Web Vision into Reality.</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={PythonIcon} alt='' className='skillBarImg' />
                    < div className='skillBarText'>
                        <h2>Python Developer</h2>
                        <p>Empowering Businesses with Python-Powered Solutions.</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={DbmsIcon} alt='' className='skillBarImg' />
                    < div className='skillBarText'>
                        <h2>DBMS</h2>
                        <p>Unlocking Data's Potential with Expert DBMS Solutions.</p>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default skills