import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';
import { googleLogin, emailAndPasswordLogin } from '../actions/auth';

const LoginScreen = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
	});

	//Desestructuro de data
	const { email, password } = data;

	const handleChange = (e) => {
		const value = e.target.value;

		//El set data contiene un objeto con una copia de data
		setData({
			...data,
			[e.target.name]: value,
		});
	};

	//Guardo en la variable dispatch el hook 'useDispatch()'
	const dispatch = useDispatch();

	//Funcion para realizar la autenticacion con Google
	const handleGoogleLogin = () => {
		// Este dispatch recibe un action, en este caso ese action es "googleLogin" que importo desde el archivo auth.js de la carpeta actions que recibe dos parametros (id, user)
		dispatch(googleLogin());
	};

	const handleEmailLogin = (e) => {
		e.preventDefault();

		//Comparaciones y validaciones.

		//Si email(sin espacios en blanco) esta vacio o email NO incluye un "@"
		if (email.trim() === '' || !email.trim().includes('@')) {
			return;
		}

		//Si password (eliminando espacios en blanco) tiene una longitud menor a 6 caracteres
		if (password.trim().length < 6) {
			return;
		}

		dispatch(emailAndPasswordLogin(email, password));
	};
	return (
		<div className="container">
			<h3>Login</h3>
			<hr />

			<div className="row container">
				<form onSubmit={handleEmailLogin} className="col s12">
					<div className="row">
						<div className="input-field col s12">
							<i className="material-icons prefix">email</i>
							<input
								onChange={handleChange}
								value={email}
								name="email"
								id="icon_prefix1"
								className="materialize-textarea"
								type="email"
							/>
							<label htmlFor="icon_prefix1">Email</label>
						</div>
						<div className="input-field col s12">
							<i className="material-icons prefix">vpn_key</i>
							<input
								onChange={handleChange}
								value={password}
								name="password"
								id="icon_prefix2"
								className="materialize-textarea"
								type="password"
							/>
							<label htmlFor="icon_prefix2">Password</label>
						</div>
					</div>
					<button className="waves-effect waves-light btn" type="submit">
						Enviar
					</button>

					<hr />

					<Link to="/auth/register">Register in the platform</Link>

					<GoogleButton onClick={handleGoogleLogin} />
				</form>
			</div>
		</div>
	);
};

export default LoginScreen;
