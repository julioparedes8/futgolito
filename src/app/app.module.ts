import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { LigasComponent } from './ligas/ligas.component';
import { HeaderpresidenteComponent } from './headerpresidente/headerpresidente.component';
import { IniciopresidenteComponent } from './iniciopresidente/iniciopresidente.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { IniciotorneoComponent } from './iniciotorneo/iniciotorneo.component';
import { DataTablesModule } from 'angular-datatables';
import { RegistrartorneoComponent } from './registrartorneo/registrartorneo.component';
import { InicioequipoComponent } from './inicioequipo/inicioequipo.component';
import { RegistrarequipoComponent } from './registrarequipo/registrarequipo.component';
import { IniciocamposComponent } from './iniciocampos/iniciocampos.component';
import { RegistrarcampoComponent } from './registrarcampo/registrarcampo.component';
import { IniciojugadorComponent } from './iniciojugador/iniciojugador.component';
import { RegistrarjugadorComponent } from './registrarjugador/registrarjugador.component';
const routes :Routes =[
  {path: '',component: InicioComponent},
  {path: 'login',component: LoginComponent},
  {path: 'ligas',component: LigasComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'about', component:AboutComponent},
  {path: 'presidente', component:IniciopresidenteComponent},
  {path: 'torneo', component:IniciotorneoComponent},
  {path: 'equipo', component:InicioequipoComponent},
  {path: 'campo', component:IniciocamposComponent},
  {path: 'jugador', component:IniciojugadorComponent},
  {path: 'registrartorneo', component:RegistrartorneoComponent},
  {path: 'registrarequipo', component:RegistrarequipoComponent},
  {path: 'registrarcampo', component:RegistrarcampoComponent},
  {path: 'registrarjugador', component:RegistrarjugadorComponent},
  {path: '**',component: InicioComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    LigasComponent,
    HeaderpresidenteComponent,
    IniciopresidenteComponent,
    IniciotorneoComponent,
    RegistrartorneoComponent,
    InicioequipoComponent,
    RegistrarequipoComponent,
    IniciocamposComponent,
    RegistrarcampoComponent,
    IniciojugadorComponent,
    RegistrarjugadorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
