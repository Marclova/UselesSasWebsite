import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioSasService{

  // private valoreCusuc: any;

  private listaHelloWorld = [
    {theContent: "Hello", valore: 1},
    {theContent: "1", valore: 3},
    {theContent: "world!", valore: 5},
    {theContent: "  (provided by", valore: 7},
    {theContent: "the great", valore: 3},
    {theContent: "SAS", valore: 99999},
    {theContent: ")", valore: 1},

  ];

  // private ses = "sos"

  getHelloWorld() {
    return this.listaHelloWorld;
  }

  // getSes() {
  //   return this.ses;
  // }

  // setValoreCusuc(newV: any){
  //   this.valoreCusuc = newV;
  // }
}
