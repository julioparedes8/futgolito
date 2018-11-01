import { Component, OnInit } from '@angular/core';
import {AuthService} from '../servicios/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-headerpresidente',
  templateUrl: './headerpresidente.component.html',
  styleUrls: ['./headerpresidente.component.css']
})
export class HeaderpresidenteComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router) 
    { }

  ngOnInit() {
  }
  cerraSesion(){
    this.authService.logOut()
    .then ((res)=>{
      this.router.navigate(['/inicio']);
    }).catch((err)=>{
      console.log(err);
    });
  }
}
