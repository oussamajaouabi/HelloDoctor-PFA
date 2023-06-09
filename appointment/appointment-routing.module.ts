import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentPage } from './appointment.page';
import { SchedulePage } from '../pages/tabs/schedule/schedule.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentPageRoutingModule {}
