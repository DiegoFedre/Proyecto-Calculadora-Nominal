import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import AppScreen from '../pages/AppScreen';
import AuthRouter from './AuthRouter';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

import { login } from '../actions/auth';
import { firebase } from '../firebase/config-firebase';
import { loadData } from '../helpers/loadData';
import { leerRegistros } from '../actions/nomina';

const AppRouter = () => {
	const dispatch = useDispatch();
	const [log, setLog] = useState(false);

	//Este useEffect va a disparar un efecto de react que nos va a permitir saber si hay un cambio en el estado de nuestra aplicacion o no
	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user) {
				dispatch(login(user.uid, user.displayName));
				//Cuando este user exista setLog va a ser true
				setLog(true);

				const nominaData = await loadData(user.uid);

				dispatch(leerRegistros(nominaData));
			} else {
				setLog(false);
			}
		});
	}, [dispatch]);

	return (
		<Router>
			<Switch>
				<PublicRoutes path="/auth" component={AuthRouter} log={log} />
				<PrivateRoutes exact path="/" log={log} component={AppScreen} />
			</Switch>
		</Router>
	);
};
export default AppRouter;
