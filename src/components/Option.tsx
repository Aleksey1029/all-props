export const Option = props => {
	const { labelText, inputType, id, img, altText } = props
	return (
		<li className='variant-wrapper'>
			<input required type={inputType} name={id} id={id} />
			<label htmlFor={id}>
				<img src={img} alt={altText} />
				{labelText}
			</label>
		</li>
	)
}
