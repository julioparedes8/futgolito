import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicioequipo',
  templateUrl: './inicioequipo.component.html',
  styleUrls: ['./inicioequipo.component.css']
})
export class InicioequipoComponent implements OnInit {

  constructor() { }
  data: any[]=[
    { numero: "1", nombreLiga:"Liga de Futbol HDZ", nombreEquipo: "Juventud FC",nombreDt:"Julio Paredes"},
    { numero: "2", nombreLiga:"Liga de Futbol HDZ", nombreEquipo: "Real Madrid FC",nombreDt:"Cristiano Ronaldo"},
    { numero: "3", nombreLiga:"Liga de Futbol HDZ", nombreEquipo: "CYS Computación",nombreDt:"Pedro Berrelleza"},
    { numero: "4", nombreLiga:"Liga de Futbol HDZ", nombreEquipo: "Barcelona",nombreDt:"Lionel Messi"},
    { numero: "5", nombreLiga:"Liga de Futbol HDZ", nombreEquipo: "Galacticos",nombreDt:"Pito Perez"},
    { numero: "6", nombreLiga:"Liga de Futbol HDZ", nombreEquipo: "Club América",nombreDt:"Rosa Rosas"},
    { numero: "7", nombreLiga:"Liga de Futbol HDZ", nombreEquipo: "Cabritas FC",nombreDt:"Flor Flores"},
    { numero: "8", nombreLiga:"Liga de Futbol HDZ", nombreEquipo: "FC Leon",nombreDt:"Luis Montes"},
    { numero: "9", nombreLiga:"Liga de Futbol HDZ", nombreEquipo: "FC México",nombreDt:"Javier Hernandéz"},
    { numero: "10", nombreLiga:"Liga de Futbol HDZ", nombreEquipo: "Bitachis FC",nombreDt:"Manuel Perez"},
    { numero: "11", nombreLiga:"Liga de Futbol HDZ", nombreEquipo: "CF Agúilas",nombreDt:"Memo Ochoa"},
    { numero: "12", nombreLiga:"Liga de Futbol HDZ", nombreEquipo: "FC Madeira",nombreDt:"Luis Nani"},
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

