import { Component, OnInit } from '@angular/core';
import {AuthService} from '../servicios/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-headerpresidente',
  templateUrl: './headerpresidente.component.html',
  styleUrls: ['./headerpresidente.component.css']
})
export class HeaderpresidenteComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje:FlashMessagesService
    ) 
    { }

  ngOnInit() {
  }
  cerrarSesion(){
    this.authService.logOut()
    .then ((res)=>{
      this.flashMensaje.show('Se ha cerrado sesión exitosamente.',
      {cssClass:'alert-success',timeout:4000});
      this.router.navigate(['/inicio']);
    }).catch((err)=>{
      this.flashMensaje.show(err.message,
        {cssClass:'alert-danger',timeout:4000});
    });
  }
}
