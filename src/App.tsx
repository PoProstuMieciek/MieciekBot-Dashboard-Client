import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { API } from './util/api';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage, MenuPage, DashboardPage, NotFound } from './pages';

function App() {
	return (
		<Router>
			<Switch>
				
				<Route path='/' exact={true} component={HomePage} />
				<Route path='/dashboard' exact={true} component={MenuPage} />
				<Route path='/dashboard/:id' exact={true} component={DashboardPage} />
				
				<Route path='/@me' exact={true} component={(): any => {
					window.location.href = API('/discord/@me');
				}} />

				<Route path='/logout' exact={true} component={(): any => {
					window.location.href = API('/auth/logout');
				}} />
				
				<Route component={NotFound} />
			
			</Switch>
		</Router>
	);
}

export default App;