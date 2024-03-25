export const AppButton = props => {
	const { buttonText } = props
	return (
		<button disabled type='button' id='next-btn'>
			{buttonText}
		</button>
	)
}
