import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth'
import * as firebase from 'firebase/app'
import { resolve } from 'url';
import { reject } from 'q';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    //inyectar el angular Auth
    public afAuth: AngularFireAuth
  ) { }
  //metodos
  //registar
  registrarUsuario(email: string, pass: string){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email,pass)
      .then( userData => resolve (userData),
      err => reject(err));
    })
  }
  //iniciar sesion
  logIn(email: string, pass: string){
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,pass)
      .then( userData => resolve (userData),
      err => reject(err));
    })
  }
  //cerrar sesion
  logOut(){
    return this.afAuth.auth.signOut();
  }
  //datos de usuario cuando inicie sesion
  getAuth(){
    return this.afAuth.authState.map(auth => auth);
  }
}
