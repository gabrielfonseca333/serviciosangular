import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePersonas } from '../../services/service.personas';
import { ServicePlantilla } from '../../services/service.plantilla';


@Component({
  selector: 'app-plantillafuncionsimple',
  templateUrl: './plantillafuncionsimple.component.html',
  styleUrl: './plantillafuncionsimple.component.css'
})
export class PlantillafuncionsimpleComponent implements OnInit {

  constructor(private _service: ServicePlantilla){}

  public funciones! : Array<string>
  public plantilla!: Array<Plantilla>
  public funcion!: string

  @ViewChild("optionfuncion") optionFuncionRef!: ElementRef

  ngOnInit(): void {
      
    this._service.getFunciones().subscribe(response=>{
      this.funciones = response
    })

  }

  mostrarPlantilla():void{
    this.funcion = this.optionFuncionRef.nativeElement.value
   
    this._service.getPlantillaFuncion(this.funcion).subscribe(response=>{
      this.plantilla = response
    })
   
  }

}
