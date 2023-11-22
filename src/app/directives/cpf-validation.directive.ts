import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { cpf } from 'cpf-cnpj-validator';

@Directive({
  selector: '[cpfValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CpfValidationDirective,
      multi: true,
    },
  ],
})

export class CpfValidationDirective implements Validator {
  
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const cpfValue = control.value;

    const isValidCpf = cpf.isValid(cpfValue);

    if (isValidCpf) {
      return null;
    }

    return { cpfValidation: true };
  }
}
