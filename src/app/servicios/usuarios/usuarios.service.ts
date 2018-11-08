import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {UsuarioInterface} from '../../models/usuarioInterface';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuariosCollection: AngularFirestoreCollection<UsuarioInterface>;
  usuarios: Observable<UsuarioInterface[]>;
  usuarioDoc: AngularFirestoreDocument<UsuarioInterface>;
  constructor(public afs: AngularFirestore) { 
    //this.usuarios= afs.collection('usuarios').valueChanges();
    this.usuariosCollection=afs.collection<UsuarioInterface>('usuarios');
    this.usuarios= this.usuariosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=> {
        const data=a.payload.doc.data() as UsuarioInterface;
        const id = a.payload.doc.id;
        return{id,...data};
      }))
    );
  }
   //Obtiene todo los usuarios
   getUsuario(){
    return this.usuarios;
  }
  //aregar el usuario
  agregarUsuario(usuario: UsuarioInterface){
    console.log('agregar')
    this.usuariosCollection.add(usuario);
  }
  //eliminarUsuario
  eliminarUsuario(){
    console.log('eliminar')
  }
  //actualizarUsuario
  actualizarUsuario(){
    console.log('actualizar')
  }
}
