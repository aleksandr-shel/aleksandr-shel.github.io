import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './features/Layout/Layout';
import Main from './Main'

function App() {
    return (
		<Routes>
			<Route path='/' element={<Layout/>}>
				<Route index element={<Main/>}/>
			</Route>
		</Routes>
    );
}

export default App;
