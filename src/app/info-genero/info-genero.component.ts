import { Component } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-info-genero',
  templateUrl: './info-genero.component.html',
  styleUrls: ['./info-genero.component.css']
})
export class InfoGeneroComponent {

  public changeBgYellow(): void {
    document.body.style.backgroundColor = "yellow";
  }
  public changeBgBlue(): void {
    document.body.style.backgroundColor = "blue";
  }
  public changeBgGrey(): void {
    document.body.style.backgroundColor = "";
  }


  verDetalle(){

    swal({
      title: 'WLADIMIR TOLEDO',
      text: "Ing. en Informática",
      type: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: '¡perfecto!',
      buttonsStyling: true
    })

  }
}
