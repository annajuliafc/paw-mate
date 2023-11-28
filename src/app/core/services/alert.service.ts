import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  openAlert(label: string, action: string, type: string) {
    this.snackBar.open(label, action, {
      duration: 3000,
      panelClass: [`${type}-snackbar`],
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  openRegisterSuccessAlert() {
    this.openAlert('Cadastro realizado com sucesso', 'X', 'success');
  }

  openRegisterWarningAlert() {
    this.openAlert(
      'Favor verifique os dados inseridos e tente novamente!',
      'X',
      'warning'
    );
  }
  openBackendErrorAlert() {
    this.openAlert(
      'Errostamos com um erro temporario, por favor tente novamente mais tarde',
      'X',
      'error'
    );
  }
}
