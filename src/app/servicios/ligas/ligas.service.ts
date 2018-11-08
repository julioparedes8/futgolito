import { Injectable, QueryList } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {LigasInterface} from '../../models/ligasInterface';


@Injectable({
  providedIn: 'root'
})
export class LigasService {
  ligasCollection: AngularFirestoreCollection<LigasInterface>;
  ligas: Observable<LigasInterface[]>;
  ligaDoc: AngularFirestoreDocument<LigasInterface>;
  constructor(public afs: AngularFirestore) { 
    this.ligasCollection=afs.collection<LigasInterface>('ligas');
    this.ligas= this.ligasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=> {
        const data=a.payload.doc.data() as LigasInterface;
        const id = a.payload.doc.id;
        return{id,...data};
      }))
    );
  }
  //no la uso pero pueda que si
  Ligas(){
    var ligasRef = this.afs.firestore.collection('ligas');
    var queryRef = ligasRef.where('nombreliga', '>=', ' ');
    //console.log(queryRef.get.length);
    queryRef.onSnapshot     
    queryRef.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());  
      })
    })
  }
  getLigas(){
    return this.ligas;
  }
}
