import { Component, OnInit } from '@angular/core';
import {AuthService} from '../servicios/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje:FlashMessagesService
  ) { }
  ngOnInit() {
    
  }
  //metodo
  iniciarSesion(){
    this.authService.logIn(this.email,this.password)
    .then ((res) => {
      this.flashMensaje.show('Inicio de sesión exitosamente.',
      {cssClass:'alert-success',timeout:4000});
      this.router.navigate(['/presidente']);
    }).catch((err)=>{
      this.flashMensaje.show(err.message,
      {cssClass:'alert-danger',timeout:4000});
      this.router.navigate(['/login']);
    })
  }
}
