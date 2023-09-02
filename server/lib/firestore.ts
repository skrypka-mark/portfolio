import { getFirestore, collection, addDoc, getCountFromServer } from 'firebase/firestore';
import { firebaseApp } from './firebase';

export interface IViewDocument {
  ip: string;
}

export const firebaseFirestore = getFirestore(firebaseApp);

export const addView = async (document: IViewDocument) => {
  const colRef = collection(firebaseFirestore, 'views');
  const docRef = await addDoc(colRef, document);

  return docRef;
};
export const getViewsTotal = async () => {
  const colRef = collection(firebaseFirestore, 'views');
  const snapshot = await getCountFromServer(colRef);

  return snapshot.data().count;
};
