import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [LoginComponent, PerfilComponent],
  imports: [CommonModule],
  exports: [LoginComponent, PerfilComponent],
})
export class UsuarioModule {}
