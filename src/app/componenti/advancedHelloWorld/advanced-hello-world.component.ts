import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-advanced-hello-world',
  templateUrl: './advanced-hello-world.component.html',
  styleUrls: ['./advanced-hello-world.component.scss']
})
export class AdvancedHelloWorld implements OnInit{

  constructor() {
  }

  // lista = [
  //   {testo: "hello", valore: 1},
  //   {testo: "1", valore: 3},
  //   {testo: "world", valore: 5}
  // ];

  // lista = [
  //   {valore: "1"},
  //   {valore: "3"},
  //   {valore: "5"}
  // ]

  @Input()
  data: any;

  @Output()
  inviaDatoEvent = new EventEmitter();

  datoDaEsportare = "TEXT!";

  inviaDato(){
    this.inviaDatoEvent.emit(this.datoDaEsportare)
  }

  ngOnInit(): void {
    this.inviaDato();
  }
}
