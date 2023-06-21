import React, { Fragment } from 'react';
import Project from './Project';
import { styled } from 'styled-components';
import {useSelector} from 'react-redux';

const ProjectsDiv = styled.div`
    width: 50vw;
    margin: 1em auto;
    min-width: 500px;
    h3{
        text-align: center;
    }
`

function Projects() {

    const {projects} = useSelector(state => state.projectsReducer);
    return ( 
        <ProjectsDiv id='projects'>
            <h3>
                Featured Projects
                <hr/>
            </h3>
            {
                projects.map(project=>
                    (
                    <Fragment key={project.name}>
                        <Project project={project}/>
                        <hr/>
                    </Fragment>))
            }
        </ProjectsDiv>
     );
}

export default Projects;