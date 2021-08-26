import { FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';


export interface ValidationResult {
    [key: string]: boolean;
}

export class MatchValidator {

    public static match(matchControl: string): ValidatorFn {
        return (control: AbstractControl): ValidationResult => {
            const formGroupControl = control.root as FormGroup;
            if (formGroupControl.controls !== undefined) {
                const compareControl = formGroupControl.controls[matchControl];
                // const compareControl = formGroupControl.controls.email;
                if (!MatchValidator.validate(control.value, compareControl.value)) {
                    // return what´s not valid
                    return { match: true };
                }
            }
            return {};
        };
    }

    private static validate(value1: string, value2: string) {
        if (value1 !== '' && value2 !== '') {
            if (value1 !== value2) {
                return false;
            }
        }
        return true;
    }
}