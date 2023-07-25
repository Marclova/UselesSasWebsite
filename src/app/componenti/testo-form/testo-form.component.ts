import {Component, OnInit, ViewChild} from '@angular/core';
import {ServizioSasService} from "../../services/servizio-sas.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-testo-form',
  templateUrl: './testo-form.component.html',
  styleUrls: ['./testo-form.component.scss']
})
export class TestoFormComponent{

  constructor(private servizioSasService: ServizioSasService, private router: Router) {
  }

  datoRicevuto = "";  //receive from AdvancedHelloWorld
  helloWorldLista = this.servizioSasService.getHelloWorld();  //receive from ServizioSasService and then send to AdvancedHelloWorld

  accettaDatoString(t: string) {
    this.datoRicevuto = t;
  }

  @ViewChild('submitForm')
  formCompilato!: NgForm;  //Prende i dati dall'input della view (one-way-data-binding)

  testoTempoReale = "this text is being saved in real-time into the ts file";  //Interscambia i dati con la view (two-way-data-binding)

  logTestoInserito() {
    console.log("testoInserito = "+this.formCompilato.value.testo)
  }

  weAreScreaming() {
    return this.router.url == "/testoForm/scream"
  }

  submitTesto(t: NgForm) {
    console.log(t);
  }
}
