/*
Formato de la estructura de los datos
    {
        id: "yfgsduyfd7s5678f4",
        fecha: "1/12/2021" -- sera un newDate(),
        pago: 300.00
    }

*/

import { db } from '../firebase/config-firebase';
import { types } from '../types/types';

export const crearRegistro = (pago) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		const datos = {
			fecha: new Date(),
			pago,
		};

		const referencia = await db.collection(`${uid}/nominas/nomina`).add(datos);

		console.log(referencia);
	};
};

export const leerRegistros = (data) => {
	return {
		type: types.nominaRead,
		payload: data,
	};
};
