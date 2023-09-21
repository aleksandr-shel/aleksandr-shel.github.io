import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div.attrs((props)=>props)`
        background-color: #000000;
        color: white;
        top: 0;
        display: flex;
        justify-content: center;
        width: 50vw;
        height: 40px;
        border-radius: 7px;
        min-width: 350px;
        z-index: 1000;
        /* position: ${(props)=>(props.scrolled==='true'? 'fixed' : 'static')}; */
        /* ${(props)=>(
            props.scrolled ==='true' ?
           `left: 50%;
            transform: translate(-50%, 0);`
            :
            `margin: 0 auto;`
        )} */
        position:fixed;
        left: 50%;
        transform: translate(-50%, 0);
        .download-link:hover{
            color:white;
            background-color: #333333;
        }
    `

function Layout() {

    const [scrolled, setScrollTop] = useState('false');

    useEffect(()=>{
        const handleScroll = () => {
            setScrollTop(window.scrollY !== 0 ? 'true':'false');
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])


    return ( 
        <>
            <Nav scrolled={scrolled}>
                <NavLink to='#portfolio' name='Portfolio'/>
                <NavLink to='#skills' name='Skills'/>
                <NavLink to='#projects' name='Projects'>
                    <NavLink to='#netverse' name='NetVerse'/>
                    <NavLink to='#sharingthings' name='Sharing Things'/>
                    <NavLink to='#weatherapp' name='Weather App'/>
                    <NavLink to='#expensetracker' name='Expense Tracker'/>
                    <NavLink to='#komanda' name='Komanda'/>
                </NavLink>
                <div className='download-link' style={{padding:'0.5em'}}>
                    <a style={{textDecoration:'none', color:'#d6d6d6'}} href="./files/Aleksandr Shelukheev CV.pdf" target="_blank" download>Download Resume</a>
                </div>
                
            </Nav>
            <Outlet/>
        </>
     );
}

const NavLinkDiv = styled.a`
    display: block;
    padding: 0.5em;
    position: relative;
    background-color: #000000;
    text-decoration: none;
    border-radius: 7px;
    color: #d6d6d6;
    white-space: nowrap;
    &:hover{
        background-color: #333333;
        color:white;
    }
    &:hover .link-dropdown{
        display: block;
    }
    .link-dropdown{
        display: none;
        position: absolute;
        z-index: 10;
        top: 100%;
        left:0;
    }
`

const NavLink = ({to, name, children})=>{
    return (
        <NavLinkDiv href={to}>
            {name}
            <div className='link-dropdown'>
                {children}
            </div>
        </NavLinkDiv>
    )
}

export default Layout;