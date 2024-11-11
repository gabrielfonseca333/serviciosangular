import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantilla } from '../../services/service.plantilla';

@Component({
  selector: 'app-plantillafuncionmultiple',
  templateUrl: './plantillafuncionmultiple.component.html',
  styleUrl: './plantillafuncionmultiple.component.css'
})
export class PlantillafuncionmultipleComponent implements OnInit{

  constructor(private _service: ServicePlantilla){
    this.funcionesSeleccionadas = new Array<string>();
  }

  public funciones! : Array<string>
  public plantilla!: Array<Plantilla>
  public funcion!: string
  public funcionesSeleccionadas: Array<string>

  @ViewChild("selectfunciones") selectfunciones!: ElementRef

  ngOnInit(): void {
      
    this._service.getFunciones().subscribe(response=>{
      this.funciones = response
    })

  }

  mostrarPlantilla():void{
    this.funcionesSeleccionadas = []

    for(var option of this.selectfunciones.nativeElement.options){
      if(option.selected==true){
        this.funcionesSeleccionadas.push(option.value)
      }
    }

    this._service.getPlantillaFunciones(this.funcionesSeleccionadas).subscribe(response=>{
      this.plantilla = response
    })
   
  }

}
