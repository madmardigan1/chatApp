import { Injectable } from '@angular/core';
import { GoogleAuthProvider, getRedirectResult, onAuthStateChanged , signOut} from '@angular/fire/auth';
import { getAuth, signInWithRedirect } from "firebase/auth";
import { Observable } from 'rxjs';

import { signInWithPopup } from "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor() { }



  async authorize() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    await signInWithRedirect(auth, provider);
    /*
        getRedirectResult(auth)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result as any );
            const token = credential!.accessToken;
        
            // The signed-in user info.
            const user = (result as any).user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(user);
          }).catch((error) => {
            // Handle Errors here.
            console.log("test");
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    */


  }

  getauth(): Observable<boolean> {
    const auth = getAuth();
    return new Observable(observer => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        observer.next(!!user); // user is signed in if user is not null
        observer.complete(); // complete the observable
      });
  
      return { unsubscribe }; // Cleanup subscription on unsubscribe
    });
  }
  

  signOut() {

    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  }
}
