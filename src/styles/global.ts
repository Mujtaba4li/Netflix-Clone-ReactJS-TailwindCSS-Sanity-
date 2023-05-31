import { css } from '@emotion/react'

import { chineseBlack } from './colors'

export default css`
	@import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400;500;600;700;800&display=swap');

	html {
		min-height: 100%;
		overflow-y: scroll;
		display: flex;
		-webkit-overflow-scrolling: touch;
		font-size: 1px;
		background: black;
	}

	body {
		display: flex;
		max-width: 100%;
		flex-grow: 1;
		margin: 0;
		font-family: 'Baloo Bhai 2', cursive;
		/* font-family: 'Inter', sans-serif; */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		user-select: none;
	}

	#root {
		display: flex;
		max-width: 100%;
		flex-grow: 1;
	}

	* {
		box-sizing: border-box;
		color: ${chineseBlack};
	}
`
