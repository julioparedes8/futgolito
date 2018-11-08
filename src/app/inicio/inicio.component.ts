import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../servicios/usuarios/usuarios.service';
import { UsuarioInterface } from '../models/usuarioInterface';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  //public  list: string[];
  usuario: UsuarioInterface={
    apellidopre:'',
    contra:'',
    correo:'',
    estatus:'',
    nombreliga:'',
    nombrepre:'',
    tipo:''
  };
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.usuarioService.getUsuario().subscribe(usuarios =>{
      //console.log(usuarios);
      for (var p of usuarios) {
        this.usuario=p;
        //console.log(this.usuario.nombreliga);
    }
    })
    
  }
  
}
