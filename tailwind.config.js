module.exports = {
	content: ['./pages/*.{js,ts,jsx,tsx}', './components/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			barlow: "'Barlow Semi Condensed', sans-serif"
		},
		extend: {
			colors: {
				'header-outline': 'hsl(217, 16%, 45%)',
				'paper-outline': 'hsl(230, 89%, 65%)',
				'scissor-outline': 'hsl(40, 84%, 53%)',
				'rock-outline': 'hsl(349, 70%, 56%)'
			},
			backgroundImage: {
				'page-radial':
					'radial-gradient(hsl(214, 47%, 23%),hsl(237, 49%, 15%))'
			},
			boxShadow: {
				'paper-inner-arc':
					'inset 0px 8px 0px 0px #b8bdd3, 0px 8px 0px 0px hsl(230deg 89% 58%)',
				'paper-win-mobile':
					'inset 0px 8px 0px 0px #b8bdd3, 0px 8px 0px 0px hsl(230deg 89% 58%), 0px 0px 0px 50px hsl(214deg 47% 23% / 50%), 0px 0px 0px 75px hsl(214deg 47% 23% / 50%), 0px 0px 0px 75px hsl(214deg 47% 23% / 50%)',
				'paper-win-desktop':
					'inset 0px 8px 0px 0px #b8bdd3, 0px 8px 0px 0px hsl(230deg 89% 58%), 0px 0px 0px 60px hsl(214deg 47% 23% / 50%), 0px 0px 0px 120px hsl(214deg 47% 23% / 50%), 0px 0px 0px 180px hsl(214deg 47% 23% / 50%)',
				'rock-inner-arc':
					'inset 0px 8px 0px 0px #b8bdd3, 0px 8px 0px 0px hsl(349, 71%, 48%)',
				'rock-win-mobile':
					'inset 0px 8px 0px 0px #b8bdd3, 0px 8px 0px 0px hsl(349, 71%, 48%), 0px 0px 0px 50px hsl(214deg 47% 23% / 50%), 0px 0px 0px 75px hsl(214deg 47% 23% / 50%), 0px 0px 0px 75px hsl(214deg 47% 23% / 50%)',
				'rock-win-desktop':
					'inset 0px 8px 0px 0px #b8bdd3, 0px 8px 0px 0px hsl(349, 71%, 48%), 0px 0px 0px 60px hsl(214deg 47% 23% / 50%), 0px 0px 0px 120px hsl(214deg 47% 23% / 50%), 0px 0px 0px 180px hsl(214deg 47% 23% / 50%)',
				'scissor-inner-arc':
					'inset 0px 8px 0px 0px #b8bdd3, 0px 8px 0px 0px hsl(39, 89%, 45%)',
				'scissor-win-mobile':
					'inset 0px 8px 0px 0px #b8bdd3, 0px 8px 0px 0px hsl(39, 89%, 45%), 0px 0px 0px 50px hsl(214deg 47% 23% / 50%), 0px 0px 0px 75px hsl(214deg 47% 23% / 50%), 0px 0px 0px 75px hsl(214deg 47% 23% / 50%)',
				'scissor-win-desktop':
					'inset 0px 8px 0px 0px #b8bdd3, 0px 8px 0px 0px hsl(39, 89%, 45%), 0px 0px 0px 60px hsl(214deg 47% 23% / 50%), 0px 0px 0px 120px hsl(214deg 47% 23% / 50%), 0px 0px 0px 180px hsl(214deg 47% 23% / 50%)'
			}
		}
	},
	plugins: []
}
