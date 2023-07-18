import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() {}

  public isRouteAuthenticated(): boolean {
    const valAuth = localStorage.getItem('isAuthenticated');
    this.isAuthenticated = valAuth === 'true' ? true : false;

    return this.isAuthenticated;
  }

  public verifyLogin(username: string, password: string): boolean {
    //LLAMADA A REST API AUTENTICACION

    if (username === 'npalma' && password === 'npalma') {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }

    localStorage.setItem('isAuthenticated', String(this.isAuthenticated));

    return this.isAuthenticated;
  }

  public logout(): void {
    this.isAuthenticated = false;
    localStorage.setItem('isAuthenticated', String(this.isAuthenticated));
  }
}
