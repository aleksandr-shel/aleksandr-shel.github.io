import React, { Fragment } from 'react';
import Project from './Project';
import { styled } from 'styled-components';
import {useSelector} from 'react-redux';

const ProjectsDiv = styled.div`
    margin: 2em auto;
    width: 100%;
    max-width: 624px;
    min-width: 350px;
    display: flex;
    flex-direction: row;
    .projects{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .title{
        margin-right: 1em;
    }
`

function Projects() {

    const {projects} = useSelector(state => state.projectsReducer);
    return ( 
        <ProjectsDiv id='projects'>
            <div className='title'>
                <h5>
                    Projects
                </h5>
            </div>
            <div className='projects'>
                {
                    projects.map(project=>
                    (
                    <Fragment key={project.name}>
                        <Project project={project}/>
                    </Fragment>))
                }
            </div>
        </ProjectsDiv>
     );
}

export default Projects;