import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario Encuesta ';

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
