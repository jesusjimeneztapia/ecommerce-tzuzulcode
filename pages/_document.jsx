import { Container } from '@mui/material'
import { Head, Html, Main, NextScript } from 'next/document'

export default function MyDocument() {
	return (
		<Html lang='es'>
			<Head />
			<body>
				<Container>
					<Main />
				</Container>
				<NextScript />
			</body>
		</Html>
	)
}
