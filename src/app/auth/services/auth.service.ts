import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private af: AngularFireAuth ) { }

  createUser(email: string, password: string) {
    console.log('email: ', email, 'Password: ', password)
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  logIn( email: string, password: string ) {
    return this.af.signInWithEmailAndPassword(email, password);
  }

  logOut() {
    return this.af.signOut();
  }

  isLoggedIn() {
    return this.af.authState
  }


}
