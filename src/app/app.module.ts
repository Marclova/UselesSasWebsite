import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvancedHelloWorld } from './componenti/advancedHelloWorld/advanced-hello-world.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TestoFormComponent } from './componenti/testo-form/testo-form.component';
import { TitoloPaginaComponent } from './componenti/titolo-pagina/titolo-pagina.component';
import { ScreamComponent } from './componenti/scream/scream.component';
import { HomePageComponent } from './componenti/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvancedHelloWorld,
    TestoFormComponent,
    TitoloPaginaComponent,
    ScreamComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
