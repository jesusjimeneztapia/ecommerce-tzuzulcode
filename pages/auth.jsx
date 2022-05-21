import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { AuthAction, withAuthUser } from 'next-firebase-auth'
import { Box, Typography } from '@mui/material'

const firebaseAuthConfig = {
	signInFlow: 'popup',
	signInOptions: [
		{
			provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
			requireDisplayName: false,
		},
		{
			provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		},
		{
			provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
		},
	],
	signInSuccessUrl: '/',
	credentialHelper: 'none',
	callbacks: {
		signInSuccessWithAuthResult: () => false,
	},
}

function Auth() {
	const [renderAuth, setRenderAuth] = useState(false)
	useEffect(() => {
		setRenderAuth(true)
	}, [])

	return (
		<Box>
			<Typography sx={{ fontSize: 24, marginBottom: 4 }}>Ingresa o Registrate</Typography>
			{renderAuth ? (
				<StyledFirebaseAuth uiConfig={firebaseAuthConfig} firebaseAuth={firebase.auth()} />
			) : null}
		</Box>
	)
}

export default withAuthUser({
	whenAuthed: AuthAction.REDIRECT_TO_APP,
})(Auth)
