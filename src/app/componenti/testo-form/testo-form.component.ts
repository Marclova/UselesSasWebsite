import {Component, OnInit, ViewChild} from '@angular/core';
import {ServizioSasService} from "../../services/servizio-sas.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-testo-form',
  templateUrl: './testo-form.component.html',
  styleUrls: ['./testo-form.component.scss']
})
export class TestoFormComponent implements OnInit{

  constructor(private servizioSasService: ServizioSasService, private router: Router) {
  }

  datoRicevuto = "";
  helloWorldLista = this.servizioSasService.getHelloWorld();

  accettaDatoString(t: string) {
    this.datoRicevuto = t;
  }

  @ViewChild('submitForm')
  formCompilato!: NgForm;

  testoTempoReale = "this text is being saved in real-time into the ts file";

  logTestoInserito() {
    console.log("testoInserito = "+this.formCompilato.value.testo)
  }

  weAreScreaming() {
    return this.router.url == "/testoForm/scream"
  }

  submitTesto(t: NgForm) {
    console.log(t);
  }

  ngOnInit() {
    // this.formCompilato = new NgForm({testo="prova"});
  }
}
