import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {TorneoInterface} from '../../models/torneoInterface';
@Injectable({
  providedIn: 'root' as any
})
export class TorneosService {
  public idTorn: string;
  torneosCollection: AngularFirestoreCollection<TorneoInterface>;
  torneo: Observable<TorneoInterface[]>;
  torneoDoc: AngularFirestoreDocument<TorneoInterface>;
  constructor(public afs: AngularFirestore) {
    
   }
   getTorneos( id: string){
    this.idTorn=id;
    this.torneosCollection=this.afs.collection<TorneoInterface>('/ligas/'+this.idTorn+'/torneos');
    this.torneo= this.torneosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=> {
        const data=a.payload.doc.data() as TorneoInterface;
        const id = a.payload.doc.id;
        return{id,...data};
      }))
    );
    return this.torneo;
  }
}
