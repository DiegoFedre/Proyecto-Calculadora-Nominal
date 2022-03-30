import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearRegistro } from '../actions/nomina';

const FormAdd = () => {
	const dispatch = useDispatch();

	const [viewForm, setViewForm] = useState(false);

	const [cantidadPago, setCantidadPago] = useState({
		precioHora: 0,
		horas: 0,
	});

	const { precioHora, horas } = cantidadPago;

	const handleAdd = () => {
		setViewForm(!viewForm);
	};

	const handleChange = (e) => {
		setCantidadPago({
			...cantidadPago,
			[e.target.name]: e.target.value,
		});
	};

	const handleSave = () => {
		const cantidadFinal = horas * precioHora;

		dispatch(crearRegistro(cantidadFinal));
	};

	return (
		<div>
			<button onClick={handleAdd} className="btn green">
				{!viewForm ? 'Agregar' : 'Cerrar'}
			</button>
			{viewForm && (
				<>
					<input
						type="text"
						placeholder="Ingresa cantidad de pago por Hora"
						value={precioHora}
						onChange={handleChange}
						name="precioHora"
					/>

					<input
						type="text"
						placeholder="Ingresa cantidad de Horas"
						value={horas}
						onChange={handleChange}
						name="horas"
					/>

					<button onClick={handleSave} className="btn purple">
						Calcular y Guardar
					</button>
				</>
			)}
		</div>
	);
};

export default FormAdd;
