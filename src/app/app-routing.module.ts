import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/usuario/login/login.component';
import { ErrorComponent } from './modules/general/error/error.component';
import { DashboardComponent } from './modules/autorizacion/dashboard/dashboard.component';
import { PerfilComponent } from './modules/usuario/perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{ path: 'perfil', component: PerfilComponent }],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
