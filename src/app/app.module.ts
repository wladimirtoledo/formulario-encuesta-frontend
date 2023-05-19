import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaGeneroComponent } from './lista-genero/lista-genero.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarGeneroComponent } from './registrar-genero/registrar-genero.component'
import { FormsModule } from '@angular/forms';
import { InfoGeneroComponent } from './info-genero/info-genero.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaGeneroComponent,
    RegistrarGeneroComponent,
    InfoGeneroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
