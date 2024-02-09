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
    width: 65vw;
    @media screen and (min-width: 1200px) {
        width: 70vw;
        .projects{
            grid-template-columns: auto auto auto;
            column-gap: 10px;
            row-gap: 10px;
        }
    }
    @media screen and (max-width: 1200px) {
        .projects{
            grid-template-columns: auto auto;
            column-gap: 10px;
            row-gap: 10px;
        }
    }
    @media screen and (max-width: 850px) {
        width: 80vw;
        .projects{
            grid-template-columns: auto;
            column-gap: 10px;
            row-gap: 10px;
        }
    }
    .projects{
        display: grid;
    }

`

function Projects() {

    const {projects} = useSelector(state => state.projectsReducer);
    return ( 
        <ProjectsDiv id='projects'>
            <h3>
                pet projects
                {/* <hr/> */}
            </h3>
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