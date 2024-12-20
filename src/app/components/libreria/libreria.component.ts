import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comic } from '../../models/comic';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css',
})
export class LibreriaComponent implements OnInit {

  
  
  @ViewChild("cajanombre") cajaNombre!: ElementRef
  @ViewChild("cajaimagen") cajaImagen!: ElementRef
  @ViewChild("cajadescripcion") cajaDescripcion!: ElementRef

  public comics!: Array<Comic>
  public mensaje! : string


  constructor(
    private _service: ServiceComics
  ){}

  ngOnInit():void{
      this.comics = this._service.getComics();
  }

  marcarFavorito(event: any):void{
    console.log("⭐favorito: " + event)
    this.mensaje = "El favorito es: " + event+ "⭐"
  }

  nuevoComic():void{
    let nombre =  this.cajaNombre.nativeElement.value
    let imagen =  this.cajaImagen.nativeElement.value
    let descripcion =  this.cajaDescripcion.nativeElement.value
    let comicNew = new Comic(nombre, imagen, descripcion)
    this.comics.push(comicNew)
  }

}
