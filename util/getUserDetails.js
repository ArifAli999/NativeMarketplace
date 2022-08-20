import useAuthStore from "../authStore"
import { app, db } from "../firebase"
import { collection, doc, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore"
import { useState } from "react";




export const getUserDetails = async (userid) => {

    const docRef = doc(db, "users", userid);
    const docSnap = await getDoc(docRef);
    const userDetails = docSnap.data();



    return docSnap.data()
};