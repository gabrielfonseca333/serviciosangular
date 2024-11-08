import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css'
})
export class ComicComponent {

  @Input() public comic!: Comic
  @Output() marcarFavoritoLibreria: EventEmitter<any> = new EventEmitter();

  marcarFavoritoComic():void{
    this.marcarFavoritoLibreria.emit(this.comic.nombre)
  }


}
