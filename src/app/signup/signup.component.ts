import { Component, OnInit } from '@angular/core';
import {AuthService} from '../servicios/auth.service';
import {UsuariosService} from '../servicios/usuarios/usuarios.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {UsuarioInterface} from '../models/usuarioInterface';
import {NgForm} from '@angular/forms/src/directives/ng_form';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  usuario: UsuarioInterface={
    apellidopre:'',
    contra:'',
    correo:'',
    estatus:'',
    nombreliga:'',
    nombrepre:'',
    tipo:''
  };
  constructor(
    public authService: AuthService,
    public usuariosService: UsuariosService,
    public router: Router,
    public flashMensaje:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  //metodo registrar en tabla autenticacion de firbase y redirigirlo a la pagina inicial
  registrarUsuario(myForm: NgForm){
    this.authService.registrarUsuario(this.usuario.correo, this.usuario.contra)
    .then ((res)=>{
      this.flashMensaje.show('Usuario creado exitosamente.',
      {cssClass:'alert-success',timeout:4000});
      this.usuario.tipo='1';
      this.usuario.estatus='A';
      this.usuariosService.agregarUsuario(this.usuario);
      this.router.navigate(['/presidente']);
    }).catch((err)=>{
      console.log(err);
      this.flashMensaje.show(err,
      {cssClass:'alert-danger',timeout:4000});
    });
  }

}
