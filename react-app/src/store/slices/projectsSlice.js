import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    projects:[
        {
            id:'netverse',
            name:'NetVerse. Social Media App.',
            description: 'Developed a social media app with messaging, following, and posting functionality by using ReactJS, ASP.NET Core, SQL Server, and AWS S3.',
            github:'https://github.com/aleksandr-shel/social-app',
            link:'https://netverse.aleksandr-shelukheev.com',
            video:'./videos/Social App.mp4',
            images: [
                './images/social app_1.png',
                './images/social app_2.png',
                './images/social app_3.png',
                './images/social app_4.png',
                './images/social app_5.png',
                './images/social app_6.png',
                './images/social app_7.png',
                './images/social app_8.png',
                './images/social app_9.png',
                './images/social app_10.png',
                './images/social app_11.png',
            ]
        },
        {
            id:'sharingthings',
            name:'Sharing Things. YouTube Clone.',
            description: 'Developed a YouTube clone by using ReactJS, ASP.NET Core, SQL Server, and some AWS.',
            github:'https://github.com/aleksandr-shel/sharing-things',
            link:'https://sharing-things.aleksandr-shelukheev.com',
            video:'./videos/Sharing Things.mp4',
            images: [
                './images/sharing things_1.png',
                './images/sharing things_2.png',
                './images/sharing things_3.png',
                './images/sharing things_4.png'
            ]
        },
        {
            id:'weatherapp',
            name:'Weather App',
            description: 'Developed a weather app that shows the current weather and weather forecast by using ReactJS, Node.js and an open-source API for getting weather data.',
            github:'https://github.com/aleksandr-shel/Weather-App',
            link:'https://weather.aleksandr-shelukheev.com',
            video:'./videos/Weather App.mp4',
            images: [
                './images/weather app_1.png',
                './images/weather app_2.png',
                './images/weather app_3.png'
            ]
        },
        {
            id:'expensetracker',
            name:'Expense Tracker',
            description: 'Developed an expense track that helps to keep track of expenses by using ReactJS, ASP.NET Core and MSSQL',
            github:'https://github.com/aleksandr-shel/expense-tracker',
            link:'https://expense-tracker.aleksandr-shelukheev.com',
            video:'./videos/Expense Tracker.mp4',
            images: [
                './images/expense tracker_1.png',
                './images/expense tracker_2.png'
            ]
        },
        {
            id:'komanda',
            name:'Komanda. Task Management App',
            description: 'In a team of 5 people built an app that helps teams to keep track of tasks. Used ReactJS, Node.js, MongoDB.',
            github:'https://github.com/egor-shev/komanda',
            link:'',
            video:'',
            images: [
                './images/komanda.JPG',
            ]
        },
    ]
}

const projectsSlice = createSlice({
    name:'projects',
    initialState,
    reducers:{

    }
})

export default projectsSlice;