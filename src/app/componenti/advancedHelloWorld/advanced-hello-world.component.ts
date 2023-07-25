import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-advanced-hello-world',
  templateUrl: './advanced-hello-world.component.html',
  styleUrls: ['./advanced-hello-world.component.scss']
})
export class AdvancedHelloWorld implements OnInit{

  constructor() {
  }

  @Input()
  data: any; //Questo dato è in attesa per venir assegnato dall'HTML di un componente  padre (da testo-form in questo caso)

  @Output()
  inviaDatoEvent = new EventEmitter(); //tramite il comando emit questo dato verrà inviato ai componenti padre in ascolto (a testo-form in questo caso)

  datoDaEsportare = "TEXT!";

  inviaDato(){
    this.inviaDatoEvent.emit(this.datoDaEsportare)
  }

  ngOnInit(): void {
    this.inviaDato();
  }
}
