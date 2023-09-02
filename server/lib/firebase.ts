import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: 'portfolio-58bfe.firebaseapp.com',
    projectId: 'portfolio-58bfe',
    storageBucket: 'portfolio-58bfe.appspot.com',
    messagingSenderId: '16345675056',
    appId: '1:16345675056:web:cfa5fe6ea92ef2301844f5',
    measurementId: 'G-1NBG7J8H2Q'
};

export const firebaseApp = initializeApp(firebaseConfig);
