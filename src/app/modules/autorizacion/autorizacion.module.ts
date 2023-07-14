import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AutorizacionRoutingModule } from './autorizacion-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, AutorizacionRoutingModule],
  exports: [DashboardComponent],
})
export class AutorizacionModule {}
