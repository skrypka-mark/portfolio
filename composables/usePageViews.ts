import {
    getFirestore,
    collection,
    query,
    where,
    addDoc,
    getDocs,
    getCountFromServer
} from 'firebase/firestore';
import { useFirebase } from '~/composables/useFirebase';

export interface IViewDocument {
    ip: string;
}

export const usePageViews = () => {
    const { firebaseApp } = useFirebase();
    const firebaseFirestore = getFirestore(firebaseApp);

    const addView = async () => {
        try {
            const { ip } = await $fetch<{ ip: string }>('https://api.ipify.org?format=json');
    
            const colRef = collection(firebaseFirestore, 'views');

            const q = query(colRef, where('ip', '==', ip));
            const doc = await getDocs(q);

            if(!doc.empty) return;

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
