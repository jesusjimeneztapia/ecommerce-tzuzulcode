import { init } from 'next-firebase-auth'
import {
	COOKIE_SECRET_CURRENT,
	COOKIE_SECRET_PREVIOUS,
	FIREBASE_API_KEY,
	FIREBASE_APP_ID,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_CLIENT_EMAIL,
	FIREBASE_MEASUREMENT_ID,
	FIREBASE_MESSAGING_SENDER_ID,
	FIREBASE_PRIVATE_KEY,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET,
} from './config/environment'

export default function initAuth() {
	init({
		authPageURL: '/auth',
		appPageURL: '/',
		loginAPIEndpoint: '/api/login',
		logoutAPIEndpoint: '/api/logout',
		firebaseAdminInitConfig: {
			credential: {
				projectId: FIREBASE_PROJECT_ID,
				clientEmail: FIREBASE_CLIENT_EMAIL,
				privateKey: FIREBASE_PRIVATE_KEY,
			},
		},
		firebaseClientInitConfig: {
			apiKey: FIREBASE_API_KEY,
			authDomain: FIREBASE_AUTH_DOMAIN,
			projectId: FIREBASE_PROJECT_ID,
			storageBucket: FIREBASE_STORAGE_BUCKET,
			messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
			appId: FIREBASE_APP_ID,
			measurementId: FIREBASE_MEASUREMENT_ID,
		},
		cookies: {
			name: 'ecommerce-tzuzulcode-app',
			keys: [COOKIE_SECRET_CURRENT, COOKIE_SECRET_PREVIOUS],
			httpOnly: true,
			maxAge: 12 * 60 * 60 * 24 * 1000,
			overwrite: true,
			path: '/',
			sameSite: 'strict',
			secure: true,
			signed: true,
		},
	})
}
