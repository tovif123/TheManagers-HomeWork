import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContantDetailsComponent} from './contant-details/contant-details.component';
import {SendingMassegeComponent } from './sending-massege/sending-massege.component';

const routes: Routes = [
  { path: 'ContactDetails', component: ContantDetailsComponent },
  { path: 'SendingMassege', component: SendingMassegeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
