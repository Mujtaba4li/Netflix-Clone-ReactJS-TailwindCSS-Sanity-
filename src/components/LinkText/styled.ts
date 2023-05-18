import { Link } from 'react-router-dom'

import styled from '@emotion/styled'
import { chineseBlack } from '@styles/colors'
import { T14BoldSpacedCSS } from '@styles/typo'
import { withPos } from '@styles/util'

export const Container = withPos(styled(Link)`
	${T14BoldSpacedCSS}
	color: ${chineseBlack};

	padding-bottom: 10rem;

	border-bottom: 1px solid black;

	text-decoration: none;

	cursor: pointer;
`)
