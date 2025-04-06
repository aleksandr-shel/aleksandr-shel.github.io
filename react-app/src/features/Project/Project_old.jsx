import React, { useState } from 'react';

import styled from 'styled-components';

const ProjectDiv = styled.div`
    position: relative;
    margin-bottom: 1em;
    /* box-shadow: 0 0 30px #ccc; */
    .images-container{
        display: flex;
        overflow: hidden;
    }
    .images-container img{
        max-width: 100%;
        max-height: 100%;
        display: block;
        position: relative;
        object-fit: contain;
    }
    .name{
        z-index: 9;
        position: absolute;
        top:0;
        width: 100%;
        left: 50%;
        transform: translate(-50%, 0);
        border-radius: 10px;
    }
    .name a {
        text-decoration: none;
    }
    .name h4{
        text-align: center;
        color:black;
    }
    .name h4 a{
        color:black;
    }
    .description{
        width: 100%;
        padding: 0.3em;
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
        display: none;
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
    .left:active{
        box-shadow: 0 0 20px black;
    }
    .right{
        border-radius: 50%;
        width:75px;
        height: 75px;
        display: none;
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
    .right:active{
        box-shadow: 0 0 20px black;
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

    &:hover .left{
        display:flex;
    }
    &:hover .right{
        display: flex;
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
