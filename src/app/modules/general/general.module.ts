import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { GeneralRoutingModule } from './general-routing.module';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, GeneralRoutingModule],
  exports: [ErrorComponent],
})
export class GeneralModule {}
