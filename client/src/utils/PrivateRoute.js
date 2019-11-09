import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route 
			{...rest} 
			render={renderProps => {
				if (localStorage.getItem('token')) {
					return <Component {...renderProps} />
			} else {
					return <Redirect to='/api/login' />
			}
		}} />
	)
}