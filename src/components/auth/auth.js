import { auth } from "../firebase/firebase";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password); 
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result= await signInWithPopup(auth, provider);

    return result;
}; 

export const doSignOut = () => {
    return auth.signOut();
};

export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
    };

export const doPasswordChange = (email) => {
    return updatePassword(auth.currentUser, email);
    };

export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser, {url: `${window.location.origin}/home`,});
    };