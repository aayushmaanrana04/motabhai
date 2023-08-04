import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

export const firebaseConfig = {
	apiKey: 'AIzaSyBsN1hffCY9A6kc0PaMKZ9EChWZdYv_qmc',
	authDomain: 'motabhai-50880.firebaseapp.com',
	projectId: 'motabhai-50880',
	storageBucket: 'motabhai-50880.appspot.com',
	messagingSenderId: '506300610621',
	appId: '1:506300610621:web:78ca8594e8c0ad702f1254'
};

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
// export const db = getFirestore(app);

export const initFirebase = () => {
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();
	return { app, auth, provider };
};
