import { getFirestore, collection, addDoc, getCountFromServer } from 'firebase/firestore';
import { useFirebase } from '~/composables/useFirebase';

export interface IViewDocument {
    ip: string;
}

export const usePageViews = () => {
    const runtimeConfig = useRuntimeConfig();
    const { firebaseApp } = useFirebase();
    const firebaseFirestore = getFirestore(firebaseApp);

    const addView = async () => {
        try {
            const { ip } = await $fetch<{ ip: string }>('https://api.ipify.org?format=json');

            if(runtimeConfig.public.EXCLUDED_IPS?.includes(ip)) return false;
    
            const colRef = collection(firebaseFirestore, 'views');
            const result = await addDoc(colRef, { ip });
            return result;
        } catch(e) {
            console.log(e);
        }
    };
    const getViewsTotal = async () => {
        try {
            const colRef = collection(firebaseFirestore, 'views');
            const snapshot = await getCountFromServer(colRef);

            const result = snapshot.data().count;
            return result;
        } catch(e) {
            console.log(e);
        }
    };

    return { addView, getViewsTotal };
};
