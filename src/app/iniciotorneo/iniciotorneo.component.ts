import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciotorneo',
  templateUrl: './iniciotorneo.component.html',
  styleUrls: ['./iniciotorneo.component.css']
})
export class IniciotorneoComponent implements OnInit {

  constructor() { }
  data: any[]=[
    { numero: "1", nombreLiga:"Liga de Futbol HDZ", nombreTorneo: "Copa 2018"},
    { numero: "2", nombreLiga:"Liga de Futbol HDZ", nombreTorneo: "Liga 2018"},
  ];
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.dtOptions = {
      language: {
        "emptyTable": "Sin resultados encontrados",
        "info": " _START_ - _END_ / _TOTAL_ ",
        "infoEmpty": "0-0 /0",
        "infoFiltered": "",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ registros",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar:",
        "zeroRecords": "Sin resultados encontrados",
        "paginate": {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior"
        }
      }
    };
  }
}
