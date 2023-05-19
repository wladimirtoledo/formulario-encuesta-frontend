import { Component, OnInit } from '@angular/core';
import { Genero } from '../genero';
import { GeneroService } from '../genero.service';

@Component({
  selector: 'app-lista-genero',
  templateUrl: './lista-genero.component.html',
  styleUrls: ['./lista-genero.component.css']
})
export class ListaGeneroComponent implements OnInit {

  generos:Genero[];

  constructor(private generoServicio:GeneroService){}

  ngOnInit():void{
      this.obtenerGeneros();
  }

  private obtenerGeneros(){
    this.generoServicio.obtenerListaGenero().subscribe(dato =>{
      //mas rapido es con una @Query de BD
      //pero quiero demostrar que todo se puede
      //sin importar como lo haga!
      var count = 0;
      var totalDatos = dato.length;
      var totalRock = 0;
      var totalClasica = 0;
      var totalMetal = 0;
      var totalOpera = 0;
      var totalCumbia = 0;
      var totalReggae = 0;
      var totalOtros = 0;
      for(var i = 0; i < dato.length; ++i){
        switch (dato[i].estilo) {
          case 'Rock':
            totalRock++;
            break;
          case 'Clasica':
            totalClasica++;
            break;
          case 'Metal':
            totalMetal++;
            break;
          case 'Opera':
            totalOpera++;
            break;
          case 'Cumbia':
            totalCumbia++;
            break;
          case 'Reggae':
            totalReggae++;
            break;
          default:
            totalOtros++;
            break;
        }
      }
      
      if(totalDatos>0){
        this.generos = [{
          "id":1,
          "estilo": "Rock",
          "email": ""+(totalRock/totalDatos)*100+"%"
        },
        {
          "id":2,
          "estilo": "Clasica",
          "email": ""+(totalClasica/totalDatos)*100+"%"
        },
        {
          "id":3,
          "estilo": "Metal",
          "email": ""+(totalMetal/totalDatos)*100+"%"
        },
        {
          "id":4,
          "estilo": "Opera",
          "email": ""+(totalOpera/totalDatos)*100+"%"
        },
        {
          "id":5,
          "estilo": "Cumbia",
          "email": ""+(totalCumbia/totalDatos)*100+"%"
        },
        {
          "id":6,
          "estilo": "Reggae",
          "email": ""+(totalReggae/totalDatos)*100+"%"
        },
        {
          "id":7,
          "estilo": "Otros",
          "email": ""+(totalOtros/totalDatos)*100+"%"
        }
        ]
      }else{
        this.generos = [];
      }
      
    });
  }

}
