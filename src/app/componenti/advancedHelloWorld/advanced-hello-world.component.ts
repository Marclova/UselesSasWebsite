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
