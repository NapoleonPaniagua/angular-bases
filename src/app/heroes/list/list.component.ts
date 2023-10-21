import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string []=['Spidermar','Ironman','Hulk','She Hulk','Thor'];
  public deletedHero?:string;

  removeLastHero():void  {
      this.deletedHero = this.heroNames.pop(); // Funcion que elimina y devuelve el ultimo item de la lista.
    console.log (this.deletedHero)
  }

}
