import { Component, OnInit } from '@angular/core';
import { Genero } from '../genero';
import { GeneroService } from '../genero.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-genero',
  templateUrl: './registrar-genero.component.html',
  styleUrls: ['./registrar-genero.component.css']
})
export class RegistrarGeneroComponent implements OnInit {

  genero : Genero = new Genero();
  constructor(private generoServicio:GeneroService,private router:Router){ }

  ngOnInit(): void {
    
  }

  /*
  guardarGenero(){
    this.generoServicio.registrarGenero(this.genero).subscribe(dato => {
      console.log(dato);
      this.irListaGeneros();
    },error => console.log(error));
  }*/

  guardarGenero(){
    swal({
      title: 'GUARDAR ESTILO MUSICAL',
      text: "Confirma si quieres guardar",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Siiii',
      cancelButtonText: 'Noo',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
      this.generoServicio.registrarGenero(this.genero).subscribe(dato => {
        console.log(dato);
        this.irListaGeneros();
        swal(
          'Estilo musical agregado',
          'El estilo musical ha sido agregado con exito',
          'success'
        )
      })
    }
    })
  }

  irListaGeneros(){
    this.router.navigate(['/genero']);
  }

  onSubmit(){
    this.guardarGenero();
  }

}
