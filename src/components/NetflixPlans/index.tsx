import { IPos } from '@styles/util'
import React, { useEffect, useState } from 'react'
import { Buttons, Container, Plans, PlansText, Renewal, Text } from './styled'
import { T14, T14Bold, T20 } from '@styles/typo'
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
	doc,
	addDoc,
	onSnapshot,
	getDoc,
} from 'firebase/firestore'
import Button from '@components/Button'
import { darkRed } from '@styles/colors'
import { loadStripe } from '@stripe/stripe-js'
import { useUserSlice } from '@userSlice/hooks'
interface IPlans extends IPos {}

const NetflixPlans = (p: IPos) => {
	const [products, setProducts] = useState<{ [key: string]: any }[]>([])
	const [subcription, setSubcription] = useState<any>(null)
	const user = useUserSlice(e => e.login)

	const db = getFirestore()

	useEffect(() => {
		async function getData() {
			if (!user?.userId) {
				console.log('User not found')
				return
			}
			const q = query(
				collection(db, 'customers', user.userId, 'subscriptions'),
				where('status', '==', 'active'),
			)
			const querySnapshot = await getDocs(q)
			querySnapshot.forEach(async subcription => {
				setSubcription({
					role: subcription.data().role,
					current_period_end: subcription.data().current_period_end.seconds,
					current_period_start: subcription.data().current_period_start.seconds,
				})
			})
		}
		getData()
	}, [user?.userId])

	console.log(subcription)

	useEffect(() => {
		async function getData() {
			const q = query(collection(db, 'products'), where('active', '==', true))
			const querySnapshot = await getDocs(q)
			const productData = []
			for (const ProductDoc of querySnapshot.docs) {
				const product = ProductDoc.data()
				const priceSnap = await getDocs(collection(ProductDoc.ref, 'prices'))
				const prices = priceSnap.docs.map(price => ({
					priceId: price.id,
					priceData: price.data(),
				}))
				productData.push({
					...product,
					prices,
				})
			}
			setProducts(productData)
		}
		getData()
	}, [])
	// console.log(products)

	const loadCheckout = async (priceId: any) => {
		if (!user?.userId) {
			console.log('User not found')
			return
		}

		try {
			const checkoutSessionRef = await addDoc(
				collection(db, 'customers', user.userId, 'checkout_sessions'),
				{
					price: priceId,
					success_url: window.location.origin,
					cancel_url: window.location.origin,
				},
			)

			const unsubscribe = onSnapshot(checkoutSessionRef, async doc => {
				const checkOut = doc.data()
				const sessionId = checkOut?.sessionId
				const error = checkOut?.error
				console.log('session id is:' + sessionId)

				if (error) {
					alert(`An error occurred: ${error.message}`)
					return
				}

				if (sessionId) {
					const stripe = await loadStripe(
						'pk_test_51NEQ06BA06dJjcQvS1ttIeQV6PCbtHOBi4ViTCofBHuMVyPMJm5oB7PP1Y0kPtWgLBeJQZZPis9rsNn4LO6WCWFt00KXEt4Twg',
					)

					stripe?.redirectToCheckout({ sessionId }).catch(error => {
						alert(`An error occurred during redirect: ${error.message}`)
					})
				}
			})
		} catch (error) {
			console.log('Error creating checkout session:', error)
		}
	}

	return (
		<Container {...p}>
			{subcription && (
				<Renewal>
					<T14Bold below={20} white>
						Renewal date:{' '}
						{new Date(subcription?.current_period_end * 1000).toLocaleDateString()}
					</T14Bold>
				</Renewal>
			)}

			{products.map(product => {
				const isCurrentPackage = product.name?.toLowerCase().includes(subcription?.role)

				return (
					<div key={product.id}>
						<Plans below={30}>
							<PlansText>
								<Text white alignSelf='flex-start'>
									{product.name}
									<T14 white alignSelf='flex-start'>
										{product.description}
									</T14>
								</Text>
							</PlansText>
							<Buttons>
								<Button
									background={isCurrentPackage ? 'grey' : darkRed}
									alignSelf='flex-end'
									onClick={() =>
										!isCurrentPackage && loadCheckout(product.prices[0]?.priceId)
									}
								>
									{isCurrentPackage ? 'Current Package' : 'Subscribe'}
								</Button>
							</Buttons>
						</Plans>
					</div>
				)
			})}
		</Container>
	)
}

export default NetflixPlans
