import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/service.comics';
import { HttpClientModule } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasComponent } from './components/personas/personas.component';
import { ServiceCoches } from './services/sevice.coches';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillafuncionsimpleComponent } from './components/plantillafuncionsimple/plantillafuncionsimple.component';
import { ServicePlantilla } from './services/service.plantilla';
import { PlantillafuncionmultipleComponent } from './components/plantillafuncionmultiple/plantillafuncionmultiple.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    LibreriaComponent,
    MenuComponent,
    HomeComponent,
    PersonasComponent,
    CochesComponent,
    PlantillafuncionsimpleComponent,
    PlantillafuncionmultipleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceComics, ServicePersonas, ServiceCoches, ServicePlantilla],
  bootstrap: [AppComponent]
})
export class AppModule { }
