import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutorizacionModule } from './modules/autorizacion/autorizacion.module';
import { GeneralModule } from './modules/general/general.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AutorizacionModule, GeneralModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
