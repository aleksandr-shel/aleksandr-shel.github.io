import React from 'react';
import styled from 'styled-components';

const TimelineDiv = styled.div`
    width: 100%;
    max-width: 624px;
    margin: 0.5em auto;
    white-space: pre-line;
    display: flex;
    flex-direction: row;
    .title{
        margin-right: 1em;
    }
    .timeline{
        border-left: solid 1px black;
    }
    /* .timeline:hover{
        transform: scale(1.005);
    } */
    .timeline-item{
        display: flex;
        padding-left: 1em;
        position: relative;
        margin-top:1em;
    }
    .timeline-item.content{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .timeline-item.content:hover{
        transform: scale(1.01);
    }
    .timeline-item.content .date{
        white-space: nowrap;
    }
    .timeline-dot{
        height: 9px;
        width: 9px;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        left:-0.3em;
    }

    .img-container{
        width:40px;
        min-width: 40px;
        margin-right: 0.5rem;
    }
    .img-container img{
        width: 100%;
    }
    .blue{
        background-color: blue;
    }
    .green{
        background-color: green;
    }
    .red{
        background-color: red;
    }
    .yellow {
        background-color: yellow;
    }
    .orange{
        background-color: orange;
    }
    .purple {
        background-color: purple;
    }
    .black {
        background-color: black;
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
        margin: 0 0.2em;
    }
`
const colorMap = {
    'Python':'#5588ff',
    'PyTorch':'#99D9F9',
    'NLP':'#D9E7F4'
}

function Timeline() {
    return ( 
        <TimelineDiv>
            <div className='title'>
                <h5>
                    Timeline
                </h5>
            </div>
            <div className='timeline'>
                <div className='timeline-item'>
                    <div className='timeline-dot blue'>
                    </div>
                    <div className='timeline-item content'>
                        <div>
                            <h6>
                                IMBT SB RAS, Russia
                            </h6>
                            <p>
                                AI/ML Researcher
                            </p>
                            <p>
                                Developed a model for machine translation based on <b>transformer</b> architecture for translation from old Mongolian (low resource dataset) to Russian.
                            </p>
                            <div className='skills'>
                                <span className='skill' style={{backgroundColor: colorMap['Python']}}>
                                    Python
                                </span>
                                <span className='skill' style={{backgroundColor: colorMap['PyTorch']}}>
                                    PyTorch
                                </span>
                                <span className='skill' style={{backgroundColor: colorMap['NLP']}}>
                                    NLP
                                </span>
                            </div>
                        </div>
                        <div className='date'>
                            Nov 2024 - Mar 2025
                        </div>
                    </div>
                </div>
                {/* <div className='timeline-item'>
                    <div className='timeline-dot black'>
                    </div>
                    <div className='timeline-item content'>
                        <div>
                            <h6>
                                Job Search unsuccessful, Canada
                            </h6>
                            <p>
                                :(
                            </p>
                        </div>
                        <div>
                            2022 - 2024
                        </div>
                    </div>
                </div> */}
                <div className='timeline-item'>
                    <div className='timeline-dot orange'>
                    </div>
                    <div className='timeline-item content'>
                        <div>
                            <h6>
                                Centennial College, Canada
                            </h6>
                            <p>
                                Diploma in Software Engineering
                            </p>
                        </div>
                        <div className='date'>
                            Sep 2020 - May 2022
                        </div>
                    </div>
                </div>
                <div className='timeline-item'>
                    <div className='timeline-dot red'>
                    </div>
                    <div className='timeline-item content'>
                        <div>
                            <h6>
                                St. Petersburg University, Russia
                            </h6>
                            <p>
                                BSc in Applied Physics and Mathematics
                            </p>
                        </div>
                        <div className='date'>
                            Sep 2015 - June 2019
                        </div>
                    </div>
                </div>
            </div>
        </TimelineDiv>
     );
}

export default Timeline;