const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				Atyp: ['Atyp'],
				AtypBold: ['Atyp Bold'],
				AtypMed: ['Atyp-Medium'],
				AtypTB: ['Atyp-Text-Bold'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			fontSize: {
				xz: ['0.56rem', { lineHeight: '1' }],
				xy: ['0.5rem', { lineHeight: '1' }],
				xx: ['0.62rem', { lineHeight: '1.5' }],
				xs: ['0.75rem', { lineHeight: '1.5' }],
				sm: ['0.875rem', { lineHeight: '1.5715' }],
				base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
				lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
				xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
				xls: ['1rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
				'2xl': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
				'3xl': ['1.88rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
				'4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
				'5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
				'6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'10xl': ['8.25rem', { lineHeight: '1.3', letterSpacing: '-0.001em' }],
			},
			screens: {
				xs: '480px',
				xx: '360px',
				ll: '1600px',
				lx: '1024px',
			},
			borderWidth: {
				3: '3px',
				0.1: '1px',
				0.2: '0.5px',
			},
			borderRadius: {
				10: '100px',
			},
			minWidth: {
				36: '9rem',
			},
			height: {
				96: '22rem',
				4.5: '1.125rem',
			},
			minHeight: {
				101: '44rem',
				98: '32rem',
				102: '55rem',
				94: '27.5rem',
			},
			width: {
				4.5: '1.125rem',
				91: '47%',
			},
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
			},
			zIndex: {
				60: '60',
			},
			colors: {
				greys: '#F3F3F3',
				listColor: '#1C1C1C',
				listtext: '#B3B3B3',
				notColor: '#CAFF33',
				headerBtnCol: '#212020',
			},
		},
	},
};
