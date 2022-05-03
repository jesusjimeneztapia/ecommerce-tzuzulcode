import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
	FIREBASE_APIKEY,
	FIREBASE_APPID,
	FIREBASE_AUTHDOMAIN,
	FIREBASE_MESSAGINGSENDERID,
	FIREBASE_PROJECTID,
	FIREBASE_STORAGEBUCKET,
} from './environment'

/**
 * @type {import('firebase/app').FirebaseOptions}
 */
const firebaseOptions = {
	apiKey: FIREBASE_APIKEY,
	authDomain: FIREBASE_AUTHDOMAIN,
	projectId: FIREBASE_PROJECTID,
	storageBucket: FIREBASE_STORAGEBUCKET,
	messagingSenderId: FIREBASE_MESSAGINGSENDERID,
	appId: FIREBASE_APPID,
}

const app = initializeApp(firebaseOptions)

export const database = getFirestore(app)
