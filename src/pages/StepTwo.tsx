import { Option } from '../components/Option'
import { Heading2 } from '../components/Typography/Heading'
import { AppButton } from '../components/UI/AppButton'

const StepTwo = () => {
	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='variants-quiz'>
					<div className='indicator'>
						<div className='indicator__text'>
							<span className='indicator__description'>
								Скидка за прохождение опроса:
							</span>
							<span className='indicator__value'>15%</span>
						</div>
						<div className='indicator__progressbar'>
							<div className='indicator__unit indicator__unit-1 _active'></div>
							<div className='indicator__unit indicator__unit-2'></div>
							<div className='indicator__unit indicator__unit-3'></div>
							<div className='indicator__unit indicator__unit-4'></div>
						</div>
					</div>
					<div className='question'>
						<Heading2 headingText2='2. На какой курс вы хотите пойти?' />
						<ul className='variants'>
							<Option
								labelText='Frontend'
								inputType='radio'
								name='variant-1'
								id='variant-1'
							/>
							<Option
								labelText='Python'
								inputType='radio'
								name='variant-2'
								id='variant-2'
							/>
							<Option
								labelText='UX/UI'
								inputType='radio'
								name='variant-3'
								id='variant-3'
							/>
							<Option
								labelText='Design'
								inputType='radio'
								name='variant-4'
								id='variant-4'
							/>
						</ul>
						<AppButton buttonText='Далее' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default StepTwo
