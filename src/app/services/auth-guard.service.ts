import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
class AuthGuardService {
  constructor(private authService: AuthService, private router: Router) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isRouteAuthenticated()) {
      return true;
    }

    this.router.navigateByUrl('/');
    return false;
  }

  public canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //logica para verificar si el hijo puede ser accedido

    return true;
  }
}

export const canActivateDashboard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(AuthGuardService).canActivate(next, state);
};

export const canActivatePerfil: CanActivateChildFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(AuthGuardService).canActivateChild(next, state);
};
