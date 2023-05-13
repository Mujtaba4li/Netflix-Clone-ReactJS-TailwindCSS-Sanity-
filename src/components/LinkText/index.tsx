import { forwardRef } from 'react'

import { IPos } from '@styles/util'

import { Container } from './styled'

export interface ILinkText extends IPos {
	children: React.ReactNode
	onClick?: () => void
	to: string
}

const LinkText = forwardRef<HTMLAnchorElement, ILinkText>((p, ref) => {
	const { children, ...props } = p

	return (
		<Container {...props} ref={ref}>
			{children}
		</Container>
	)
})

export default LinkText
