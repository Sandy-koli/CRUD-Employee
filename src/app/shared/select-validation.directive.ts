import { Directive } from '@angular/core';
import { Validators, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appSelectValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: 'SelectValidationDirective',
    multi: true
  }]
})
export class SelectValidationDirective implements Validators {

  validate(control: AbstractControl): { [key: string]: any } | null {
    return control.value === '-1' ? { 'defaultSelected': true } : null;
  }

}

