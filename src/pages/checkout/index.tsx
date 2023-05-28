import React from 'react'
import { Column, Container, Content, Left, Right, Text, TextwithLine } from './styled'
import { T14, T16, T16Bold, T20 } from '@styles/typo'
import GpaySVG from '@assets/components/Button'
import Button from '@components/Button'
import Line from '@components/Line'
import TextField from '@components/TextField'
import { Row } from '@styles/util'
import DropDown from '@components/Dropdown'
interface ICheckout {}

const Checkout = (p: ICheckout) => {
	return (
		<Container>
			<Left>
				<Content>
					<T20>Checkout left</T20>
					<T20>Checkout left</T20>
					<T20>Checkout left</T20>
				</Content>
			</Left>
			<Right>
				<Content>
					<Button icon={GpaySVG} width='100%'>GPay</Button>
					<TextwithLine>
						<Line opacity={0.3} dark />
						<Text>Or pay with card</Text>
						<Line opacity={0.3} dark />
					</TextwithLine>
					<Column gap={5}above={10}>
						<T16Bold alignSelf='flex-start'>Email</T16Bold>
						<TextField type='email' placeholder='Enter Email address' />
					</Column>
					<Column above={15}>
						<T16Bold alignSelf='flex-start' below={5}>
							Card Information
						</T16Bold>
						<TextField
							type='text'
							placeholder='Enter Card Number'
							conditionalField='cardNumber'
						/>
						<Row>
							<TextField
								type='text'
								placeholder='MM/YY'
								conditionalField='expiryDate'
							/>
							<TextField type='number' placeholder='CVV' conditionalField='cvv' />
						</Row>
					</Column>

					<Column gap={5} above={15}>
						<T16Bold alignSelf='flex-start'>Name on Card</T16Bold>
						<TextField type='text' />
					</Column>

					<Column above={15}>
						<T16Bold alignSelf='flex-start' below={5}>Billing address</T16Bold>
						<DropDown />
						<TextField type='text' placeholder='Address Line 1' />
						<TextField type='text' placeholder='Address Line 2' />
                        <Row>
						<TextField type='text' placeholder='Town or city' />
						<TextField type='text' placeholder='Postal code' conditionalField='postalCode' />

                        </Row>
					</Column>
                    <Button above={20} width='100%'>Subcribe</Button>

                    <Text above={10}>By confirming your subcription, you allow Mujtaba Demo site to charge your card for the payment and future payements in accordance with their terms</Text>
				</Content>
			</Right>
		</Container>
	)
}

export default Checkout
