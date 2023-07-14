import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
  public errorTitle: string = 'Página no encontrado';
  public errorMessage: string = 'La página que solicitó no existe';
}
