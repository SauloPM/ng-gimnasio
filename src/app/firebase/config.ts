import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyCCbQsfD2Wa-q6BC1dW3IakmDW35zwh9Xk',
    authDomain: 'gimnasio-d8a52.firebaseapp.com',
    projectId: 'gimnasio-d8a52',
    storageBucket: 'gimnasio-d8a52.firebasestorage.app',
    messagingSenderId: '958358803725',
    appId: '1:958358803725:web:a3a3abf2e11a7ff4f74c44',
};

export const firebaseApp = initializeApp(firebaseConfig);