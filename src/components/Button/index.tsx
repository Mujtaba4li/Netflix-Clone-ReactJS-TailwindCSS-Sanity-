import { forwardRef } from 'react'

import { T14BoldSpaced } from '@styles/typo'
import { IPos } from '@styles/util'

import { Container, Icon, Text } from './styled'

export interface IButton extends IPos {
	children: React.ReactNode
	onClick?: () => void
	icon?: string
	background?:string
	color?:string
}

const Button = forwardRef<HTMLButtonElement, IButton>((p, ref) => {
	const { children,icon,color, ...props } = p
	return (
		<Container {...props} ref={ref}>
			{icon?<Icon src={icon} />:null}
			<Text color={color}>{children}</Text>
		</Container>
	)
})

export default Button
