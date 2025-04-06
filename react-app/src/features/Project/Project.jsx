import React from 'react';
import styled from 'styled-components';


const ProjectDiv = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    text-decoration: none;
    color: black;
    cursor:pointer;
    margin-bottom: 1em;
    white-space: pre-line;

    &:hover{
        transform: scale(1.01);
    }

    .skills{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        line-height: normal;
    }

    .skills .skill{
        border-radius: 20px;
        padding: 0.1em 0.2em;
        margin: 0 0.1em;
    }
`

const colorMap = {
    'React': '#B7B1F2',
    'ASP.NET Core': '#FDB7EA',
    'C#':'#578FCA',
    'Python':'#5588ff',
    'JavaScript':'#FFE7C7',
    'TypeScript':'#FFCF50',
    'Node':'#ffb09c',
    'SQL':'#FFB8E0',
    'Express.js':'#EC7FA9',
    'AWS':'#A4B465',
    'MongoDB':'#E6B2BA',
    'Weather API':'#FBF3B9',
    'PyTorch':'#99D9F9',
    'NLP':'#D9E7F4'
}

function Project({project}) {

    return ( 
        <ProjectDiv href={project.github} rel='noreferrer' target='_blank' id={project.id}>
            <div>
                <h6>
                    {project.name}
                </h6>
                <p>
                    {project.description}
                </p>
            </div>
            <div className='skills'>
                {project.skills.map((skill, i)=>{
                    return(
                        <span key={i} className='skill' style={{backgroundColor:colorMap[skill]}}>
                            {skill}
                        </span>
                    )
                })}
            </div>
        </ProjectDiv> 
     );
}

export default Project;