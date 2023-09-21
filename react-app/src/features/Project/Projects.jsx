import React, { Fragment } from 'react';
import Project from './Project';
import { styled } from 'styled-components';
import {useSelector} from 'react-redux';

const ProjectsDiv = styled.div`
    margin: 1em auto;
    min-width: 350px;
    h3{
        text-align: center;
    }
    width: 50vw;
    @media screen and (max-width: 2000px) {
        width: 55vw;
    }
    @media screen and (max-width: 992px) {
        width: 80vw;
    }
`

function Projects() {

    const {projects} = useSelector(state => state.projectsReducer);
    return ( 
        <ProjectsDiv id='projects'>
            <h3>
                Featured Projects
                {/* <hr/> */}
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