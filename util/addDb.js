import useAuthStore from "../authStore"
import { app, db } from "../firebase"
import { collection, doc, getDoc, getDocs, onSnapshot, query, setDoc, Timestamp, where } from "firebase/firestore"
import { useState } from "react";




export const addToDb = async (data) => {



    const docData = {

        description: data.description,
        location: data.location,
        name: data.name,
        phone: data.phone,
        userid: data.userid,
        skills: {
            skill: data.skills,
        },
        educations: { education: data.education },
        created_At: Timestamp.now(),
        category: data.type
    }

    try {
        await setDoc(doc(db, "postings", data.userid), docData);
        alert('posted')
    }
    catch (error) {
        alert(error.message)
    }
};