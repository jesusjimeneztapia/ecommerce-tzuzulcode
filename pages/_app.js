import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { Box } from '@mui/material'
import Header from '../components/Header'
import initAuth from '../initAuth'
import '../styles/globals.css'

initAuth()

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Box sx={{ paddingX: 3, paddingY: 4 }}>
				<Component {...pageProps} />
			</Box>
		</>
	)
}
