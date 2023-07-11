import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestoFormComponent} from './componenti/testo-form/testo-form.component';
import {AdvancedHelloWorld} from "./componenti/advancedHelloWorld/advanced-hello-world.component";
import {ScreamComponent} from "./componenti/scream/scream.component";
import {HomePageComponent} from "./componenti/home-page/home-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'testoForm', component: TestoFormComponent, children: [
      {path: 'scream', component: ScreamComponent}
    ]},
  {path: 'advancedHelloWorld', component: AdvancedHelloWorld},
  {path: 'scream/:l', component: ScreamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
