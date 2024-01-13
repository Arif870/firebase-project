import React from "react";
import app from "../../firebase/FirebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleLogIn}>Sign IN</button>
    </div>
  );
};

export default SignIn;
