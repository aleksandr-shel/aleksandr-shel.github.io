import React, { useState } from 'react';

import styled from 'styled-components';

const ProjectDiv = styled.div`
    position: relative;
    border-radius: 10px;
    margin-bottom: 1em;
    border:1px solid black;
    .images-container{
        display: flex;
        overflow: hidden;
    }
    .images-container img{
        max-width: 100%;
        max-height: 100%;
        display: block;
        position: relative;
        border-radius: 10px;
    }
    .name{
        z-index: 9;
        position: absolute;
        top:0;
        width: 100%;
        left: 50%;
        transform: translate(-50%, 0);
        /* background-color: lightgray; */
        border-radius: 10px;
    }
    .name h4{
        text-align: center;
        text-decoration: underline;
    }
    .description{
        z-index: 11;
        position: absolute;
        width: 100%;
        left:0;
        bottom: 0;
        padding: 0.3em;
        background-color: lightgray;
        border-radius: 10px;
    }
    .links a{
        margin: 0.5em;
        text-decoration: none;
        color: black;
        font-size: larger;
    }
    .left{
        width:50%;
        z-index: 10;
        position: absolute;
        height: 100%;
        top:0;
        left: 0;
        display:flex;
        justify-content: start;
        align-items: center;
        user-select: none;
        font-size: 80px;
        opacity: 0.5;
    }
    .right{
        width:50%;
        z-index: 10;
        position: absolute;
        height: 100%;
        top:0;
        right: 0;
        display:flex;
        justify-content: end;
        align-items: center;
        user-select: none;
        font-size: 80px;
        opacity: 0.5;
    }
`

function Project({project}) {

    const length = project.images.length;
    const [current, setCurrent] = useState(0);

    function clickRight(){
        setCurrent((current + 1)% length);
    }
    function clickLeft(){
        setCurrent((length + current - 1) % length)
    }
    return ( 
        <ProjectDiv id={project.id}>
            <div className='images-container'>
                {project.images.map(image=>{
                    return (
                        <img key={image} style={{left: '-'+ current * 100 + '%'}} src={image} alt='project'/>
                    )
                })}
            </div>
            <div className='name'>
                <h4>
                    {project.name}
                </h4>
            </div>
            <div className='description'>
                {project.description}
                <div className='links'>
                    <a href={project.github} className='fa-brands fa-github' rel='noreferrer' target='_blank'>
                    </a>
                </div>
            </div>
            {
                length > 1 && 
                <>
                    <div className='left' onClick={clickLeft}>
                    {'<'}
                    </div>
                    <div className='right' onClick={clickRight}>
                        {'>'}
                    </div>
                </>
            }
        </ProjectDiv>
     );
}

export default Project;