import React from 'react';
import styled from 'styled-components';

const UL = styled.ul`
    li{
        display: flex;
        margin-bottom: 0.5rem;
    }
    .img-container{
        width:40px;
        min-width: 40px;
        margin-right: 0.5rem;
    }
    .img-container img{
        width: 100%;
    }
`

function Education() {
    return ( 
        <div style={{whiteSpace:'pre-line'}}>
            <div>
                <h6>Education:</h6>
                <UL>
                    <li>
                        <a className='img-container' href='https://english.spbu.ru/' target='_blank' rel="noreferrer">
                            <img src='./images/saint-petersburg-state-university.png' alt='spbu'/>
                        </a>
                        <div>
                            {"BSc at the Saint Petersburg State University with a major in Applied Physics and Mathematics.\n Russia, 2015-2019"}
                        </div>
                    </li>
                    <li>
                        <a className='img-container' href='https://www.centennialcollege.ca/' target='_blank' rel="noreferrer">
                            <img src='./images/centennial-college.jpg' alt='centennial-college'/>
                        </a>
                        <div>
                            {"Diploma at the Centennial College in Software Engineering.\n Canada, 2020-2022"}
                        </div>
                    </li>
                </UL>
            </div>
        </div>
     );
}

export default Education;