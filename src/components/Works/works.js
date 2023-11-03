import React from 'react'
import "./works.css";

import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'


const works = () => {
  return (
    <section id='works'> 
    <h2 className='worksTitle'>
        My Portfolio
    </h2>
    <span className='worksDesc'>I take pride attention to the smallest details and making sure that my work is pixel perfect.
     I am excited to bring my skills and experience to help businesses.
     </span>

    <div className='worksImgs'>
      <a href='https://github.com/Mukulkumar28/forage-lyft-starter-repo' rel="noreferrer" target='_blank'>
       <img src={portfolio1} alt='' className='worksImg'/>
         </a>
      <a href='https://mppharmaceuticals.com/' rel="noreferrer" target='_blank'>
       <img src={portfolio2} alt='' className='worksImg'/>
         </a>
      <a href='https://github.com/Mukulkumar28/forage-lyft-starter-repo' rel="noreferrer" target='_blank'>
       <img src={portfolio3} alt='' className='worksImg'/>
         </a>
    </div>

    <button className='workBtn'>See More</button>
    </section>
  );
}

export default works;