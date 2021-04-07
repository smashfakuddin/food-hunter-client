import React, { useContext, useState } from 'react';
import './LogIn.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';




if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const LogIn = () => {
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: ''
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result.user)
                const { displayName, email } = result.user;
                const signedInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email
                }
                setLoggedInUser(signedInUser);
                console.log(displayName)
            })
    }



    return (
        <div>
            {
             loggedInUser.email? <h2 className='message'>Welcome {loggedInUser.name} </h2> : <button className='signIn-button' onClick={handleSignIn} >Continue With google </button>
            }
           
        </div>
    );
};

export default LogIn;