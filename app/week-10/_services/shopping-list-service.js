import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  doc,
  deleteDoc, updateDoc
} from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const items = [];
    const userDocRef = doc(db, "users", userId);
    const itemsSubcollectionRef = collection(userDocRef, "items");
    const q = query(itemsSubcollectionRef);
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });

    return items;
  } catch (error) {
    console.error("Error getting shopping list items:", error);
    throw error;
  }
};


export const addItem = async (userId, item) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const itemsSubcollectionRef = collection(userDocRef, "items");
    const docRef = await addDoc(itemsSubcollectionRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding shopping list item:", error);
    throw error;
  }
};

export const deleteItem = async (userId, itemId) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const itemDocRef = doc(collection(userDocRef, "items"), itemId);
    await deleteDoc(itemDocRef);
  } catch (error) {
    console.error("Error deleting shopping list item:", error);
    throw error;
  }
};
