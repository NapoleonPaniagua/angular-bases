import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hola Mundo ';


/*  haciendolo de otro manera
  dincreaseBy():void{
    //this.counter= this.counter+1; // forma larga de hacer;o
    this.counter -=1;
  }
*/
}
