import { initializeApp } from 'firebase/app';

export const useFirebase = () => {
    const runtimeConfig = useRuntimeConfig();
    
    const firebaseConfig = {
        apiKey: process.env.FB_API_KEY,
        authDomain: runtimeConfig.public.FB_AUTH_DOMAIN,
        projectId: runtimeConfig.public.FB_PROJECT_ID,
        storageBucket: runtimeConfig.public.FB_STORAGE_BUCKET,
        messagingSenderId: runtimeConfig.public.FB_MESSAGING_SENDER_ID,
        appId: runtimeConfig.public.FB_APP_ID,
        measurementId: runtimeConfig.public.FB_MEASUREMENT_ID
    };

    const firebaseApp = initializeApp(firebaseConfig);

    return { firebaseApp };
};
