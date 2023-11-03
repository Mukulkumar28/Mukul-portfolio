import React, { useRef } from 'react';
import './contact.css';
import Walmart from "../../assets/walmart.png";
import LinkedinIcon from "../../assets/linkedin.png";
import GithubIcon from "../../assets/github.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u4r98gt', 'template_gi5s4kf', form.current, '_3H8ibx8p5pdZOwu1')
      .then((result) => {

        console.log(result.text);
        e.target.reset()
        alert ('Email Sent !');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contactPage'>
      <div id='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clietsDesc'>
        I've developed a live website for MP Pharmaceuticals, providing a valuable online presence for the pharmaceutical industry.
        </p>


        <div className='clientImgs'>

        <a href='https://mppharmaceuticals.com/' rel="noreferrer" target='_blank'>


          <img src={Walmart} alt='' className='clientImg' />
</a>
        </div>
      </div>

      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>
          Please fill out the form below to discuess any work opportunities.
        </span>

        <form className='contactForm' ref={form}  onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='your_name'/>
          <input type='email' className='email' placeholder='Your Email' name='your_email'/>
          <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
          <button type='submit' value="send" className='submitBtn'>Submit</button>

          <div className='links'>

           <a href='https://www.linkedin.com/in/mukulkumar99/' rel="noreferrer" target='_blank'>

            <img src={LinkedinIcon} alt='imagelink' className='link' />
           </a>

            <a href='https://github.com/Mukulkumar28' rel="noreferrer" target='_blank'>

            <img src={GithubIcon} alt='' className='link' />
</a>
            <a href='https://www.youtube.com/channel/UC4l-0SDa0Ramy1lcXs99SLA' rel="noreferrer" target='_blank'>

            <img src={YouTubeIcon} alt='' className='link' />
</a>
            <a href='https://www.instagram.com/mukul_26_/' rel="noreferrer" target='_blank'>

            <img src={InstagramIcon} alt='' className='link' />
           </a>

          </div>

        </form>


      </div>
    </section>
  );
}

export default Contact;

