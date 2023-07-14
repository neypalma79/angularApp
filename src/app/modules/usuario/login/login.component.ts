import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public labelUsername: string = 'Usuario:';
  public labelPassword: string = 'Clave:';
  private username: string = '';
  private password: string = '';

  constructor(private router: Router) {}

  get getUsername(): string {
    return this.username;
  }

  get getPassword(): string {
    return this.password;
  }

  public setUsername(event: any) {
    const { value } = event.target;

    this.username = value;
  }

  public setPassword(event: any) {
    const { value } = event.target;

    this.password = value;
  }

  public login(): void {
    console.info(
      `Login con username: ${this.username} y password: ${this.password}`
    );

    if (this.username === 'npalma' && this.password === 'npalma') {
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Datos no válidos');
    }
  }
}
