import { collection, DocumentData, Firestore, getDocs } from "firebase/firestore/lite";

export const getPosts = async(db : Firestore) : Promise<DocumentData[]> => 
    (await getDocs(collection(db, 'posts'))).docs.map(doc => doc.data());

