import { Component } from '@angular/core';

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
}
