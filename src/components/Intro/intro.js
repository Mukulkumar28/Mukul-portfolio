import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from "../../assets/resume.png";

const intro = () => {
  const resumeUrl = ''; // Replace with the URL of your resume

  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'> I'm <span className='introName'>Mukul</span> <br/> Website Developer </span>
        <p className='introPara'>I am a skilled web developer with hands-on practice in
          <br/> building creative and responsive websites </p>

        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
          <button className='btn'>
            <img src={btnImg} alt='Resume' className='btnImg' /> Download Resume
          </button>
        </a>
      </div>

      <img src={bg} alt='Profile' className='bg'/>    
    </section>
  )
}

export default intro;
