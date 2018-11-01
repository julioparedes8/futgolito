import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'futgolito';
  showHead: boolean = false;
  ngOnInit() {
  }

  constructor(private router: Router) {
  // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if ((event['url'] == '/presidente') ||(event['url'] == '/torneo') ||(event['url'] == '/registrartorneo')||(event['url'] == '/equipo')||(event['url'] == '/registrarequipo')
        ||(event['url'] == '/campo')||(event['url'] == '/registrarcampo')||(event['url'] == '/jugador')||(event['url'] == '/registrarjugador')) {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
  }

}
