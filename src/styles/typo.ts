import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { withPos } from './util'

export const T48Bold = withPos(styled.h1`
	margin: 0;
	min-height: ${48}rem;
	line-height: 1;

	font-size: ${48}rem;
	font-weight: 600;
`)

export const T24CSS = css`
	margin: 0;
	min-height: ${24}rem;
	line-height: 1;

	font-size: ${24}rem;
	font-weight: normal;
`

export const T24 = withPos(styled.p`
	${T24CSS}
`)

export const T24BoldCSS = css`
	${T24CSS}
	font-weight: 600;
`

export const T24Bold = withPos(styled.p`
	${T24BoldCSS}
`)

export const T24BoldSpacedCSS = css`
	${T24BoldCSS}

	letter-spacing: ${80 / 1000}em;
	text-transform: uppercase;
`

export const T24BoldSpaced = withPos(styled.p`
	${T24BoldSpacedCSS}
`)

export const T16CSS = css`
	margin: 0;
	min-height: ${16}rem;
	line-height: 1;

	font-size: ${16}rem;
	font-weight: normal;
`

export const T16 = withPos(styled.p`
	${T16CSS}
`)

export const T16BoldCSS = css`
	${T16CSS}
	font-weight: 600;
`

export const T16Bold = withPos(styled.p`
	${T16BoldCSS}
`)

export const T14CSS = css`
	margin: 0;
	min-height: ${14}rem;
	line-height: 1;

	font-size: ${14}rem;
	font-weight: normal;
`

export const T14 = withPos(styled.p`
	${T14CSS}
`)

export const T14BoldCSS = css`
	${T14CSS}
	font-weight: 600;
`

export const T14Bold = withPos(styled.p`
	${T14BoldCSS}
`)

export const T14BoldSpacedCSS = css`
	${T14BoldCSS}

	letter-spacing: ${80 / 1000}em;
	text-transform: uppercase;
`

export const T14BoldSpaced = withPos(styled.p`
	${T14BoldSpacedCSS}
`)

export const T36CSS = css`
	margin: 0;
	min-height: ${36}rem;
	line-height: 1;

	font-size: ${36}rem;
	font-weight: normal;
`

export const T36 = withPos(styled.p`
	${T36CSS}
`)

export const T36BoldCSS = css`
	${T36CSS}
	font-weight: 600;
`

export const T36Bold = withPos(styled.p`
	${T36BoldCSS}
`)

export const T36BoldSpacedCSS = css`
	${T36BoldCSS}

	letter-spacing: ${80 / 1000}em;
	text-transform: uppercase;
`

export const T36BoldSpaced = withPos(styled.p`
	${T36BoldSpacedCSS}
`)

export const T17CSS = css`
	margin: 0;
	min-height: 17rem;
	line-height: 1;

	font-size: 17rem;
	font-weight: normal;
`

export const T17 = withPos(styled.p`
	${T17CSS}
`)

export const T17BoldCSS = css`
	${T17CSS}
	font-weight: 600;
`

export const T17Bold = withPos(styled.p`
	${T17BoldCSS}
`)

export const T30CSS = css`
	margin: 0;
	min-height: 30rem;
	line-height: 1;

	font-size: 30rem;
	font-weight: normal;
`

export const T30 = withPos(styled.p`
	${T30CSS}
`)

export const T30BoldCSS = css`
	${T30CSS}
	font-weight: 600;
`

export const T30Bold = withPos(styled.p`
	${T30BoldCSS}
`)

export const T20CSS = css`
	margin: 0;
	min-height: 20rem;
	line-height: 1;

	font-size: 20rem;
	font-weight: normal;

	letter-spacing: ${-30 / 1000}em;
`

export const T20 = withPos(styled.p`
	${T20CSS}
`)

export const T20BoldCSS = css`
	${T20CSS}
	font-weight: 600;
`

export const T20Bold = withPos(styled.p`
	${T20BoldCSS}
`)
