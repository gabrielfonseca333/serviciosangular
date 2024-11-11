import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { HomeComponent } from './components/home/home.component';
import { PersonasComponent } from './components/personas/personas.component';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillafuncionsimpleComponent } from './components/plantillafuncionsimple/plantillafuncionsimple.component';
import { PlantillafuncionmultipleComponent } from './components/plantillafuncionmultiple/plantillafuncionmultiple.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "libreria", component: LibreriaComponent},
  {path: "personas", component: PersonasComponent},
  {path: "coches", component: CochesComponent},
  {path: "plantillafunciones", component: PlantillafuncionsimpleComponent},
  {path: "plantillafuncionesmultiples", component: PlantillafuncionmultipleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
