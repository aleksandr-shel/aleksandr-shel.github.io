import React from 'react';
import { styled } from 'styled-components';



const SkillsDiv = styled.div`
    width: 50vw;
    margin: 1em auto;
    min-width: 350px;
    h3{
        text-align: center;
    }
    .skills-icons{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .skills-icons > div{
        margin: 0.5em;
    }

    .skills-icons > div > p{
        text-align: center;
    }
`
function Skills() {
    return ( 
        <SkillsDiv id='skills'>
            <h3>
                Skills
                <hr/>
            </h3>
            <div className="skills-icons">
                <div>
                    <i className="devicon-csharp-plain colored" style={{fontSize:'4em'}}></i>
                    <p>C#</p>
                </div>
                <div>
                    <i className="devicon-javascript-plain colored" style={{fontSize:'4em'}}></i>
                    <p>JavaScript</p>
                </div>
                <div>
                    <i className="devicon-java-plain-wordmark colored" style={{fontSize:'4em'}}></i>
                    <p>Java</p>
                </div>
                <div>
                    <i className="devicon-typescript-plain colored" style={{fontSize:'4em'}}></i>
                    <p>TypeScript</p>
                </div>
                <div>
                    <i className="devicon-python-plain-wordmark colored" style={{fontSize:'4em'}}></i>
                    <p>Python</p>
                </div>
                <div>
                    <i className="devicon-html5-plain-wordmark colored" style={{fontSize:'4em'}}></i>
                    <p>HTML5</p>
                </div>
                <div>
                    <i className="devicon-css3-plain-wordmark colored" style={{fontSize:'4em'}}></i>
                    <p>CSS3</p>
                </div>
            </div>
            <div className="skills-icons">
                <div>
                    <i className="devicon-spring-plain-wordmark colored" style={{fontSize:'4em'}}></i>
                    <p>Spring</p>
                </div>
                <div>
                    <i className="devicon-nodejs-plain-wordmark colored" style={{fontSize:'4em'}}></i>
                    <p>NodeJs</p>
                </div>
                <div>
                    <i className="devicon-react-original-wordmark colored" style={{fontSize:'4em'}}></i>
                    <p>React</p>
                </div>
                <div>
                    <i className="devicon-dotnetcore-plain colored" style={{fontSize:'4em'}}></i>
                    <p>ASP.NET Core</p>
                </div>
            </div>
            <div className="skills-icons">
                <div>
                    <i className="devicon-microsoftsqlserver-plain-wordmark colored" style={{fontSize:'4em'}}></i>
                    <p>SQL Server</p>
                </div>
                <div>
                    <i className="devicon-mysql-plain-wordmark colored" style={{fontSize:'4em'}}></i>
                    <p>MySQL</p>
                </div>
                <div>
                    <i className="devicon-mongodb-plain-wordmark colored" style={{fontSize:'4em'}}></i>
                    <p>MongoDB</p>
                </div>
                <div>
                    <i className="devicon-amazonwebservices-plain-wordmark colored" style={{fontSize:'4em'}}></i>
                    <p>AWS</p>
                </div>
            </div>
            <div class="skills-icons">
                <div>
                    <img alt='agile' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-agile-agile-flaticons-lineal-color-flat-icons-6.png"/>
                    <p>Agile</p>
                </div>
                <div>
                    <i className="devicon-github-original-wordmark colored" style={{fontSize:'4em'}}></i>
                    <p>GitHub</p>
                </div>
            </div>
            
        </SkillsDiv>
     );
}

export default Skills;