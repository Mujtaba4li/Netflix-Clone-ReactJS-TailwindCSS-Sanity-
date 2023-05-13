import { useDispatch } from 'react-redux'

import Button from '@components/Button'
import { setDummy } from '@mainSlice'
import { useMainSlice } from '@redux/hooks'
// import { useMainSlice } from '@mainSlice/hooks'
import { T16, T48Bold } from '@styles/typo'

import { Container } from './styled'

const Home = () => {
	const dispatch = useDispatch()

	const dummy = useMainSlice(e => e.dummy)

	const updateDummy = (e: string) => dispatch(setDummy(e))

	const onClick = () => {
		const time = new Date().getTime()
		updateDummy(time.toString())
	}

	return (
		<Container>
			<T48Bold>{dummy}</T48Bold>
			<a href='collections'>

				<T16>Go to collections</T16>
			</a>
			<Button above={50} onClick={onClick}>
				Click here
			</Button>
		</Container>
	)
}

export default Home
