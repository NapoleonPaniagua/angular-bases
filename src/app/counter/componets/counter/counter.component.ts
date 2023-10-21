import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  //template: '<h1>Hola Counter</h1>'   aqui mantenmos el apostrofo por linea.
  template: `
  <h3> Counter: {{ counter }}</h3>
<button  (click)="increaseBy(+1)" > +1 </button>
<button  (click)="resetCouneter()" > RESET </button>
<button  (click)="increaseBy(-1)" > -1 </button>
<!-- <button (click)="dincreaseBy()" >-1</button>-->

  `

})
export class  CounterComponent{
  public counter: number = 10;

  increaseBy(value : number):void{
    //this.counter= this.counter+1; // forma larga de hacer;o
        this.counter +=value;
  }

  resetCouneter (){
    this.counter =10;
  }


}
