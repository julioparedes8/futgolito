import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciocampos',
  templateUrl: './iniciocampos.component.html',
  styleUrls: ['./iniciocampos.component.css']
})
export class IniciocamposComponent implements OnInit {

  constructor() { }
  data: any[]=[
    { numero: "1", nombreLiga:"Liga de Futbol HDZ", nombreCampo: "Unidad Deportiva",direccion:"Higuera de Zaragoza"},
    { numero: "2", nombreLiga:"Liga de Futbol HDZ", nombreCampo: "Polideportivo",direccion:"San Jose"},
    { numero: "3", nombreLiga:"Liga de Futbol HDZ", nombreCampo: "Campo de Futbol Emilio",direccion:"Cohuibampo"},
    { numero: "4", nombreLiga:"Liga de Futbol HDZ", nombreCampo: "Estadio Manuel Ibarra",direccion:"Ahome"},
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
