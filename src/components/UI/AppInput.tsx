export const AppInput = props => {
	const { inputLabel, id, inputType, inputPlacaholder, errorMessage } = props
	return (
		<label className='input-wrapper' htmlFor='username'>
			{inputLabel}
			<input
				required
				type={inputType}
				name={id}
				id={id}
				placeholder={inputPlacaholder}
			/>
			<span id='error-message'>{errorMessage}</span>
		</label>
	)
}

// export const AppInput2 = () => {
// 	return (
// 		<label className='input-wrapper' htmlFor='phone'>
// 			Ваш номер
// 			<input
// 				required
// 				type='tel'
// 				name='phone'
// 				id='phone'
// 				placeholder='+998 9- --- -- -- '
// 			/>
// 			<span id='error-message'>Введите номер в правильном формате</span>
// 		</label>
// 	)
// }
