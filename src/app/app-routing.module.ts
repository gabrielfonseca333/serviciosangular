import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "libreria", component: LibreriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
