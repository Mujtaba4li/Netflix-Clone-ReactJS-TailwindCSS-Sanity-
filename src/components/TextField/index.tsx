import React, { useState, ChangeEvent } from 'react'
import { CardIcon, Cards, Container, Error, Eye, Icon, Input, Line } from './styled'
import { IPos } from '@styles/util'
import {
	CreditCard,
	CvvSVG,
	EyeSVG,
	MagnetCard,
	VisaCard,
} from '@assets/components/TextField'

type TFieldType = 'text' | 'password' | 'number' | 'email'
type TConditionalField = 'cardNumber' | 'expiryDate' | 'cvv' | 'postalCode'

interface ITextField extends IPos {
	placeholder?: string
	type: TFieldType
	width?: string
	conditionalField?: TConditionalField
	backgroundColor?: string
}

const TextField = ({ ...p }: ITextField) => {
	const { placeholder, type, conditionalField } = p
	const [visible, setVisible] = useState(true)
	const [typeText, setTypeText] = useState(type)
	const [emailError, setEmailError] = useState('')
	const [text, setText] = useState('')

	const handleEyeClick = () => {
		setVisible(!visible)
		setTypeText(visible ? 'text' : type)
	}

	const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value

		if (type === 'email' && !isValidEmail(inputValue)) {
			setEmailError('Invalid Email!')
		} else {
			setEmailError('')
		}

		if (conditionalField === 'cvv') {
			const inputValue = event.target.value.replace(/[^\d]/g, '')
			if (inputValue.length <= 3) {
				const formattedValue = inputValue.replace(/(\d{4})/g, '$1')
				setText(formattedValue)
			}
		} else if (conditionalField === 'postalCode') {
			const inputValue = event.target.value
			if (inputValue.length <= 5) {
				const formattedValue = inputValue.slice(0, 5)
				setText(formattedValue)
			}
		} else if (conditionalField === 'expiryDate') {
			const inputValue = event.target.value.replace(/[^\d]/g, '')
			if (inputValue.length <= 4) {
				const formattedValue = inputValue.replace(/(\d{2})/g, '$1/')
				const finalValue = formattedValue.replace(/\/$/, '')
				setText(finalValue)
			}
		} else if (conditionalField === 'cardNumber') {
			const inputValue = event.target.value.replace(/[^\d]/g, '')
			if (inputValue.length <= 16) {
				const formattedValue = inputValue.replace(/(\d{4})(?!$)/g, '$1 ')
				const finalValue = formattedValue.replace(/\/$/, '')
				setText(finalValue)
			}
		} else {
			setText(event.target.value)
		}
	}

	const isValidEmail = (value: string): boolean => {
		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(value)
	}

	return (
		<>
			<Container {...p}>
				<Input
					{...p}
					type={typeText}
					placeholder={placeholder}
					onChange={handleInput}
					value={text}
				/>
				{type === 'password' && (
					<>
						<Icon onClick={handleEyeClick}>
							<Eye src={EyeSVG} visible={visible ? 1 : 0} />
							{visible && <Line />}
						</Icon>
					</>
				)}
				{emailError && <Error>{emailError}</Error>}
				{conditionalField === 'cvv' && <CardIcon src={CvvSVG} height={25} alt='CVV' />}
				{conditionalField === 'cardNumber' && (
					<Cards>
						<CardIcon src={CreditCard} height={45} alt='CVV' />
						<CardIcon src={MagnetCard} height={45} alt='CVV' />
						<CardIcon src={VisaCard} height={45} alt='CVV' />
					</Cards>
				)}
			</Container>
		</>
	)
}

export default TextField
