import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import {AuthService} from '../servicios/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
@Component({
  selector: 'app-iniciopresidente',
  templateUrl: './iniciopresidente.component.html',
  styleUrls: ['./iniciopresidente.component.css']
})
export class IniciopresidenteComponent implements OnInit {
  
  constructor(public authService: AuthService, public afAuth: AngularFireAuth) { 

  }
  ngOnInit() {
  
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        // logged in or user exists
        console.log(user.email.valueOf.toString+ ' SI')
      }
      else {
        // not logged in
        console.log(user+' NO')
      }
    })
  }

}
