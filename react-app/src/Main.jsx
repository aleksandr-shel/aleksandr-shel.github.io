import React from 'react';
import Projects from './features/Project/Projects';
import Timeline from './features/Timeline/Timeline';
import About from './features/About/About';

function Main() {

    return ( 
        <>
            <About/>
            <Timeline/>
            <Projects/>
        </>
     );
}

export default Main;