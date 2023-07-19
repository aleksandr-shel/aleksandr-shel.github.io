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
        object-fit: contain;
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
        opacity: 0;
    }
    &:hover .description{
        opacity: 0.7;
    }
    .links a{
        margin: 0.5em;
        text-decoration: none;
        color: black;
        font-size: larger;
    }
    .left{
        border-radius: 50%;
        width:75px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        position: absolute;
        top:50%;
        left: 0;
        transform: translateY(-50%);
        user-select: none;
        font-size: 80px;
        opacity: 0.3;
        background-color: #D3D3D3;
        &:hover{
            background-color: #C0C0C0;
        }
    }
    .right{
        border-radius: 50%;
        width:75px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        position: absolute;
        top:50%;
        right: 0;
        transform: translateY(-50%);
        user-select: none;
        font-size: 80px;
        opacity: 0.3;
        background-color: #D3D3D3;
        &:hover{
            background-color: #C0C0C0;
        }
    }

    .arrow-right{
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }

    .arrow-left{
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
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
                {project.link === '' ?
                    <h4>
                        {project.name}
                    </h4>
                    :
                    <h4>
                        <a href={project.link} rel='noreferrer' target='_blank'>
                            {project.name}
                        </a>
                    </h4>
                }
            </div>
            <div className='description'>
                {project.description}
                <div className='links'>
                    <a href={project.github} className='fa-brands fa-github' rel='noreferrer' target='_blank'>
                        GitHub
                    </a>
                </div>
            </div>
            {
                length > 1 && 
                <>
                    <div className='left' onClick={clickLeft}>
                        <i class="arrow-left"></i>
                    </div>
                    <div className='right' onClick={clickRight}>
                        <i class="arrow-right"></i>
                    </div>
                </>
            }
        </ProjectDiv>
     );
}

export default Project;