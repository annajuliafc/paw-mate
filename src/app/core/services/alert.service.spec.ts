import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from './alert.service';

describe('AlertService', () => {
  let alertService: AlertService;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      providers: [AlertService, { provide: MatSnackBar, useValue: spy }],
    });

    alertService = TestBed.inject(AlertService);
    snackBarSpy = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
  });

  it('should be created', () => {
    expect(alertService).toBeTruthy();
  });

  it('should open success alert', () => {
    alertService.openRegisterSuccessAlert();

    expect(snackBarSpy.open).toHaveBeenCalledWith(
      'Cadastro realizado com sucesso',
      'X',
      jasmine.objectContaining({ panelClass: ['success-snackbar'] })
    );
  });

  it('should open warning alert', () => {
    alertService.openRegisterWarningAlert();

    expect(snackBarSpy.open).toHaveBeenCalledWith(
      'Favor verifique os dados inseridos e tente novamente!',
      'X',
      jasmine.objectContaining({ panelClass: ['warning-snackbar'] })
    );
  });

  it('should open backend error alert', () => {
    alertService.openBackendErrorAlert();

    expect(snackBarSpy.open).toHaveBeenCalledWith(
      'Errostamos com um erro temporario, por favor tente novamente mais tarde',
      'X',
      jasmine.objectContaining({ panelClass: ['error-snackbar'] })
    );
  });
});
