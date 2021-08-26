import { FormControl } from '@angular/forms';


export interface ValidationResult {
    [key: string]: boolean;
}

export class EmailValidator {

    public static email(control: FormControl): ValidationResult {
        if (!EmailValidator.validate(control.value)) {
            // return what´s not valid
            return { email: true };
        }
        return {};
    }

    private static validate(input: string) {
        if (input === null || input === '') { // Always use Validator.required for empty validation
            return true;
        }

        const valid = input.toString().match(/(^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$)/);
        if (valid) {
            return true;
        }

        return false;
    }
}