import React, { useState } from 'react';
import styled from 'styled-components';
import Projects from './features/Project/Projects';
import Skills from './features/Skills/Skills';
import Education from './features/Education/Education';

const AboutDiv = styled.div`
    width: 60vw;
    margin: 1em auto;
    margin-top: 40px;
    min-width: 350px;
    border-radius: 10px;
    background-color: white;
    .cover-section{
    }
    .cover-section img{
        max-width: 100%;
        max-height: 100%;
        display: block;
        border-radius: 10px;
    }
    .about-section{
        display: flex;
    }
    .avatar-div{
        position: relative;
        top: -10px;
        min-width: 60px;
        min-height: 60px;
        width: 25%;
        height: 25%;
    }
    .avatar-div img{
        /* width: 200px;
        height: 200px; */
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 5px solid white;
    }
    .info{
        margin-left: 1em;
    }
    .name{
        font-size: larger;
        font-weight: bolder;
    }
    .location{
        font-size: small;
        font-weight: lighter;
    }
    .contact-div{
        margin-top: 0.5em;
        display: flex;
    }
    .contact-div div{
        cursor: pointer;
        background-color: #0072b1;
        border:0;
        border-radius: 20px;
        color:white;
        padding: 0.5em 1em;
        font-weight: bold;
        position: relative;
        min-width: 180px;
        white-space: nowrap;
    }
    .links{
        display: flex;
        min-width: 100px;
        justify-content: center;
        font-size: larger;
    }
    .links a{
        margin: 0.5em;
        text-decoration: none;
        color: black;
    }
    @media screen and (max-width: 1200px) {
        .contact-div{
            flex-wrap: wrap;
        }
        .contact-div > *{
            margin-top: 0.5em;
        }
        .about-section{
            flex-wrap: wrap;
        }
    }
`

function Main() {

    const [copiedPhone, setCopiedPhone] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);
    function handleClickPhonenumber(){
        navigator.clipboard.writeText('+1 647 917 4302');
        setCopiedPhone(true);
        setTimeout(()=>{
            setCopiedPhone(false);
        },2000)
    }

    function handleClickEmail(){
        window.location = 'mailto:shelukheev@gmail.com'
    }

    function handleCopyEmail(){
        navigator.clipboard.writeText('shelukheev@gmail.com');
        setCopiedEmail(true);
        setTimeout(()=>{
            setCopiedEmail(false);
        },2000)
    }

    return ( 
        <>
            <AboutDiv id='portfolio'>
                <div className='cover-section'>
                    <img src='./images/cover.jpg' alt='cover'/>
                </div>
                <div className='about-section'>
                    <div className='avatar-div'>
                        <img src='./images/me_2.jpg' alt='avatar'/>
                    </div>
                    <div className='info'>
                        <div className='name'>
                            Aleksandr Shelukheev
                        </div>
                        <div style={{whiteSpace:'pre-line'}}>
                            {"Software Engineer. I specialize in full-stack web development in \n.NET Core (C#), React, Node.js/Express.js and Spring Boot. I am also interested in machine learning."}
                        </div>
                        <div className='location'>
                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                            North York, Toronto, ON, Canada
                        </div>
                        <div className='contact-div'>
                            <div style={{marginRight:'0.5em'}} onClick={handleClickEmail}>
                                <i className="fa-solid fa-envelope" style={{marginRight:'0.5em'}}></i>
                                shelukheev@gmail.com
                                {
                                    copiedEmail ?
                                    <i className="fa-solid fa-check" style={{marginLeft:'0.5em'}}></i>
                                    :
                                    <i title='Click to copy' className="fa-solid fa-copy" style={{marginLeft:'0.5em'}} onClick={(e)=>{e.stopPropagation(); handleCopyEmail()}}></i>
                                }
                            </div>
                            <div title='Click to copy' onClick={handleClickPhonenumber}>
                                <i className="fa-solid fa-phone" style={{marginRight:'0.5em'}}></i>
                                {
                                    copiedPhone
                                    ?
                                    'Copied'
                                    :
                                    '+1 647 917 4302'
                                }
                            </div>
                        </div>
                        <Education/>
                    </div>
                    <div className='links'>
                        <a href='https://www.linkedin.com/in/alex-shel/' className='fa-brands fa-linkedin'  rel='noreferrer' target='_blank'>
                        </a>
                        <a href='https://www.instagram.com/alexshelshel/' className='fa-brands fa-instagram'  rel='noreferrer' target='_blank'>
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100013570871269' className='fa-brands fa-facebook'  rel='noreferrer' target='_blank'>
                        </a>
                    </div>
                </div>
            </AboutDiv>
            <Skills/>
            <Projects/>
        </>
     );
}

export default Main;