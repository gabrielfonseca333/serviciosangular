import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {

  public personas! : Array<Persona>

  constructor(private _service: ServicePersonas){  }

ngOnInit():void{
  this._service.getPersonasPromesa().then(response=>{
    console.log("leyendo")
    this.personas = response
  })
}

}
