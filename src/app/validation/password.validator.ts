import { FormControl } from '@angular/forms';

export interface ValidationResult {
    [key: string]: boolean;
}

export class PasswordValidator {

    public static strong(control: FormControl): ValidationResult {
        if (control.value === null || control.value === '') { // Always use Validator.required for empty validation
            return {};
        }

        if (PasswordValidator.validate(control.value)) {
            return {};
        }
        // return what´s not valid
        return { strong: true };
    }

    public static caps(control: FormControl): ValidationResult {
        if (control.value === null || control.value === '') { // Always use Validator.required for empty validation
            return {};
        }

        if (control.value.match(/[A-Z+]/)) {
            return {};
        }
        // return what´s not valid
        return { caps: true };
    }

    public static small(control: FormControl): ValidationResult {
        if (control.value === null || control.value === '') { // Always use Validator.required for empty validation
            return {};
        }

        if (control.value.match(/[a-z+]/)) {
            return {};
        }
        // return what´s not valid
        return { small: true };
    }

    public static digit(control: FormControl): ValidationResult {
        if (control.value === null || control.value === '') { // Always use Validator.required for empty validation
            return {};
        }

        if (control.value.match(/[0-9+]/)) {
            return {};
        }
        // return what´s not valid
        return { digit: true };
    }

    public static special(control: FormControl): ValidationResult {
        if (control.value === null || control.value === '') { // Always use Validator.required for empty validation
            return {};
        }

        if (control.value.match(/[$@$!%*?&+]/)) {
            return {};
        }
        // return what´s not valid
        return { special: true };
    }

    public static len(control: FormControl): ValidationResult {
        if (control.value === null || control.value === '') { // Always use Validator.required for empty validation
            return {};
        }

        if (control.value.length >= 6) {
            return {};
        }
        // return what´s not valid
        return { len: true };
    }

    public static len12(control: FormControl): ValidationResult {
        if (control.value === null || control.value === '') { // Always use Validator.required for empty validation
            return {};
        }

        // return what´s not valid
        if (control.value.length >= 12) {
            return {};
        }

        // return what´s not valid
        return { len12: true };
    }

    private static validate(input: string) {
        if (input === null || input === '') { // Always use Validator.required for empty validation
            return true;
        }

        let validCaps = false;
        let validSmall = false;
        let validDigit = false;
        let validSpecial = false;
        let validLength = false;

        if (input.match(/[A-Z+]/)) {
            validCaps = true;
        }

        if (input.match(/[a-z+]/)) {
            validSmall = true;
        }

        if (input.match(/[0-9+]/)) {
            validDigit = true;
        }

        if (input.match(/[$@$!%*?&+]/)) {
            validSpecial = true;
        }

        if (input.length >= 12) {
            validLength = true;
        }

        const valid = validCaps && validSmall && validDigit && validSpecial && validLength;
        if (!valid) {
            return false;
        }

        return true;
    }
}