import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'ironMan';
  public age: number = 45;

  get capitalizedName():string { // es un metodo get que se ve como si fuera propiedad y asi es llamado desde el html
    return this.name.toUpperCase();
  }

  getHeroDescription():string{    // esre es un metodo o funcion que tengo que invocarlos con ()
    return `${this.name}- ${this.age}`;
  }

  changeHero(): void {
    this.name='SpiderMan';
  }

  resetForm(): void {
    this.name='ironMan';
    this.age=45;

    /*document.querySelectorAll ('h1')!.forEach ( element =>{
      element.innerHTML=' <h1> Dede Angular </h1>';
    });*/
  }

  changeAge(): void {
    this.age=25;
  }



}
