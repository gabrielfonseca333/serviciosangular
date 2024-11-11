import { Component, OnInit } from '@angular/core';
import { ServiceCoches } from '../../services/sevice.coches';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrl: './coches.component.css'
})
export class CochesComponent implements OnInit {
  constructor(private _service: ServiceCoches){}

  public coches!: Array<Coche>

  ngOnInit(): void {
      this._service.getCoches().subscribe(response=>{
        this.coches = response
      })
  }
}
