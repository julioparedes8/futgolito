import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import {FormsModule} from '@angular/forms';
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
import {AuthService} from './servicios/auth.service';
import {UsuariosService} from './servicios/usuarios/usuarios.service';
import {LigasService} from './servicios/ligas/ligas.service';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthGuard} from './guards/auth.guard';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { TorneosService } from './servicios/torneos/torneos.service';

const routes :Routes =[
  {path: '',component: InicioComponent},
  {path: 'login',component: LoginComponent},
  {path: 'ligas',component: LigasComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'about', component:AboutComponent},
  {path: 'presidente', component:IniciopresidenteComponent, canActivate: [AuthGuard]},
  {path: 'torneo', component:IniciotorneoComponent,canActivate: [AuthGuard]},
  {path: 'equipo', component:InicioequipoComponent,canActivate: [AuthGuard]},
  {path: 'campo', component:IniciocamposComponent,canActivate: [AuthGuard]},
  {path: 'jugador', component:IniciojugadorComponent,canActivate: [AuthGuard]},
  {path: 'registrartorneo', component:RegistrartorneoComponent,canActivate: [AuthGuard]},
  {path: 'registrarequipo', component:RegistrarequipoComponent,canActivate: [AuthGuard]},
  {path: 'registrarcampo', component:RegistrarcampoComponent,canActivate: [AuthGuard]},
  {path: 'registrarjugador', component:RegistrarjugadorComponent,canActivate: [AuthGuard]},
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
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    DataTablesModule,FormsModule,AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
    AngularFirestoreModule
  ],
  providers: [AuthService,AuthGuard,FlashMessagesService,UsuariosService,LigasService,TorneosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
