import { Component, OnInit } from '@angular/core';
import {AuthService} from '../servicios/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  //metodo registrar
  registrarUsuario(){
    this.authService.registrarUsuario(this.email, this.password)
    .then ((res)=>{
      console.log ('Se registro bien');
      this.router.navigate(['/presidente']);
    }).catch((err)=>{
      console.log(err);
    });
  }
}
