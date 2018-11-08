import { Component, OnInit } from '@angular/core';
import {LigasService} from '../servicios/ligas/ligas.service';
import {LigasInterface} from '../models/ligasInterface';
import {TorneosService} from '../servicios/torneos/torneos.service';
import {TorneoInterface} from '../models/torneoInterface';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.css']
})
export class LigasComponent implements OnInit {
  public liga: LigasInterface={
    id: '',
    nombreliga:'' ,
    correo: '',
    estatus: '',
  };
  public torneo: TorneoInterface={
    id: '',
    estatus: '',
    nombretorneo:'' ,
  };
  
  ligasEncontradas: string[]=new Array;
  torneosEncontrados: string[]=new Array;
  cantidad: number[]=new Array;
  public id: string;
  nestedArrays: string[][];
  constructor(public ligaService: LigasService,public torneoService: TorneosService) { }
  ngOnInit() {
    //cargo las ligas de futbol al html
    //llamos al servicio y me regresa los nombres de las ligas en una lista
    this.ligaService.getLigas().subscribe(ligas =>{
      //console.log(usuarios);
      //por cada liga se agrega a un vector para posteriormente mostrarlos en el accordion
      for (var l of ligas) {
        this.liga=l;
        //cargas los torneos
        //inserto al vector
        this.id=this.liga.id;
        this.torneoService.getTorneos(this.id).subscribe(torneos =>{
          for (var t of torneos) {
            this.torneo=t;
            this.torneosEncontrados.push(this.torneo.nombretorneo);
            console.log(this.torneo.nombretorneo)
          }
        })
        //
        this.ligasEncontradas.push(this.liga.nombreliga);
    }
    })
  }

}
