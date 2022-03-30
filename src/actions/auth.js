//Aqui colocare todo lo referente a autenticacion, ya sea de login, logout etc.
import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/config-firebase';

export const googleLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
			});
	};
};

export const emailAndPasswordLogin = (email, password) => {
	return (dispatch) => {
		firebase
			.auth()

			//Registra o crea un usuario y un password
			.signInWithEmailAndPassword(email, password)

			//Luego de crearlo va a actualizar el perfil que creo, le va a agregar el displayname
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
			});
	};
};

export const register = (email, password, username) => {
	return (dispatch) => {
		firebase
			.auth()

			//Registra o crea un usuario y un password
			.createUserWithEmailAndPassword(email, password)

			//Luego de crearlo va a actualizar el perfil que creo, le va a agregar el displayname
			.then(async ({ user }) => {
				await user.updateProfile({ displayName: username });
				dispatch(login(user.uid, user.displayName));
			});
	};
};

export const login = (uid, displayname) => {
	return {
		type: types.login,
		payload: {
			uid,
			displayname,
		},
	};
};

export const logout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();

		dispatch({
			type: types.logout,
		});
	};
};
